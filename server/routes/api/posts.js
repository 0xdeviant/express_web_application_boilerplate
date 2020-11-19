import Express from 'express';
import mongoose from 'mongoose';
import posts_schema from '../schema/posts_schema.js'
const router = Express.Router();

//  GET POSTS
router.get('/api/posts', async (req, res) => {
  let posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
})

async function loadPostsCollection() {
  mongoose.connect('mongodb+srv://deus_web:wS715dTv5SMs6iAU@cluster0.ad8w4.mongodb.net/deus?retryWrites=true&w=majority', {
    urlNewParser: true
  })
  let model = mongoose.model('posts', posts_schema);
  return model
}
// MONGDB GET REQUEST

export default router;