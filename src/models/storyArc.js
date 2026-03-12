const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectI

const getAllStoryArcs = async () => {
    const db = mongodb.getDb().db();
    return await db.collection('storyArcs').find().toArray();
}

const getAllStoryArcsById = async (id) => {
    const db = mongodb.getDb().db();
    return await db.collection('storyArcs').findOne({ _id:new ObjectId(id) });
}

const createStoryArcs = async () => {
    const db = mongodb.getDb().db();
    return await db.collection('storyArcs').find().toArray();
}

const getAllStoryArcs = async () => {
    const db = mongodb.getDb().db();
    return await db.collection('storyArcs').find().toArray();
}

module.exports = {
    getAllStoryArcs,
    getAllStoryArcsById
}