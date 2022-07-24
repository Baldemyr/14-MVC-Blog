const { Post } = require('../models');

const postData = [
    {
        title: "Andrews Tech Chat!",
        post_content: "Here we go. Lets see if I can get seeding working correctly",
        user_id: 3
    },
    {
        title: "Whats the point of Heroku?",
        post_content: "Seriously.  It seems to just add another layer of complexity",
        user_id: 1
    },
    {
        title: "Whats the point of Github?",
        post_content: "I know Github torments us new dev folks but there is a point-especially when trying to collabortate.  Unfortunetly this is where the problems really start for new users",
        user_id: 2

    },
    {
        title: "How useful is CSS?",
        post_content: "I know this seems silly but with the use of Bootstrap and Tailswinds, just how much CSS do I need to know?",
        user_id: 5
    },
    {
        title: "Need to find a washroom in TO?",
        post_content: "Rumour has it a crack dev team is making this real.  No more bathroom confusion in TO",
        user_id: 4
    },
    {
        title: "Testing Seeds system",
        post_content: "Trying to figure out how to get all the seeds to mesh as they come into the app",
        user_id: 4
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;