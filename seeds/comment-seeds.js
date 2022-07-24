const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing! I need help with bathroom stops"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "No idea honestly"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Its certainly an important foundation"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "OMG this is wonderful! No more hidden pee bottles"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "You really need to use it!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "No idea.  Seriously"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Github is a tool of control used by our harsh overseers!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is all going to burn!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;