'use strict';

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    let queryObj = _id ? {_id} : {} ;
    return schema.find(queryObj);
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
