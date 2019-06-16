const { validationResult } = require('express-validator/check');
const Comment = require('../models/comment')
const Org = require('../models/org')
const Orgember = require('../models/orgmember')

exports.getCommentsOrg = async (req, res, next) => {
  const orgNm = req.params.orgnm;
  const objOrgId = await Org.findOne({where: {orgNm}})
  if(objOrgId) {
    const {orgId} = objOrgId;
    const comments = await Comment.findAll({attributes: ["comment"], where: orgId});
    return res.status(200).json({
      comments
    });
  }

  res.status(400).json({
    message: "Org name not Found"
  })
};

exports.getMembersOrg = async (req, res, next) => {
  const orgNm = req.params.orgnm;
  const objOrgId = await Org.findOne({where: {orgNm}})
  if(objOrgId) {
    const {orgId} = objOrgId;
    const members = await Orgember.findAll({attributes: ["firstName", "lastName"], where: orgId});
    return res.status(200).json({
      members
    });
  }

  res.status(400).json({
    message: "Org name not Found"
  })

};


exports.createComment = async (req, res, next) => {
  try {
    const orgNm = req.params.orgnm;
    const objOrgId = await Org.findOne({where: {orgNm}})
    if(!objOrgId) {
      return res.status(400).json({
        message: "Org name not Found"
      })
    }

    const errors = validationResult(req);
    const commentText = req.body.comment;
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: 'Validation failed, entered data is incorrect.',
        errors: errors.array()
      });
    }

    objOrgId.createComment({ comment: commentText })
    return res.status(201).json({
        message: 'Comment created successfully!'
      });
  } catch (error) {
    res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      error: errors.array()
    })
  }
};

exports.deleteComment = async (req, res, next) => {
  try{
    const orgNm = req.params.orgnm;
    const objOrgId = await Org.findOne({where: {orgNm}})
    if(!objOrgId) {
      res.status(400).json({
        message: "Org name not Found"
      })
    }

    const errors = validationResult(req);
    const commentText = req.body.comment;
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: 'Validation failed, entered data is incorrect.',
        errors: errors.array()
      });
    }

    Comment.destroy({where: {orgId: objOrgId.id}})
    res.status(201).json({
      message: 'Comment deleted successfully!'
    });
  } catch (error) {
    console.log(error)
    res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      error: errors.array()
    })
  }
};
