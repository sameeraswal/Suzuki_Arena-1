require("../db/connection");
const Round = require("../model/roundsSchema");

exports.getRoundLists = async (req, res) => {
    let status = false;
    try {
        let rounds = await Round.find().select({ roundName: 1, _id: 0 });
        if (rounds) {
            status = true;
            res.status(201).json({
                status: status,
                data: rounds
            })
        } else {
            res.status(404).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.json({
            status: status,
            error: error
        })
    }
}

exports.getRoundDetails = async (req, res) => {
    let status = false;
    const round = req.params.roundName;
    try {
        const rounds = await Round.findOne({ roundName: round });
        if (rounds) {
            status = true;
            res.status(201).json({
                status: status,
                data: rounds
            })
        } else {
            res.status(400).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.json({
            status: status,
            error: error
        })
    }
}