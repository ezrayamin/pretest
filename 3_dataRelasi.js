relasi : async (req, res) => {
    try {
        const getId = `WITH RECURSIVE relasi_path (id, nama, idprev) AS
                        (
                        SELECT id, nama, idprev
                            FROM relasi_komunal
                            WHERE id = '${req.body.id}'
                        UNION ALL
                        SELECT r.id, r.nama, r.idprev
                            FROM relasi_path AS rp JOIN relasi_komunal AS r
                            ON rp.idprev = r.id
                        )
                        SELECT * FROM relasi_path
                        order by id;`
        const result = await asyncQuery(getId)
        res.status(200).send(result)

    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}