const express = require('express');
const { body } = require('express-validator/check');

const commentControllers = require('../controllers/orgs');

const router = express.Router();

// GET /comments/orgId
router.get('/:orgnm/comment', commentControllers.getCommentsOrg);

// POST /comments/orgId
router.post(
  '/:orgnm/comment',
  [
    body('comment')
      .trim()
      .isLength({ min: 5 }),
  ],
  commentControllers.createComment,
);

// DELETE /orgnm/comment
router.delete('/:orgnm/comment', commentControllers.deleteComment);

router.get('/:orgnm/members', commentControllers.getMembersOrg);

module.exports = router;
