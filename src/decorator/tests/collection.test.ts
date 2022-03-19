import { Post } from './sample/empty-collection/Post';

describe('Decorator > Collection', ()=>{
  describe('CollectioName', ()=>{
    it('initialize collection with', ()=>{
      const post = new Post();
      console.log('post', post);
      expect(post.name).toBe('post')
    })
  })
})
