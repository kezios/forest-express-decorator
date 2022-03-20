import { Post as EmptyPost } from './sample/empty-collection/Post';
import { Post as SmartFieldPost } from './sample/smart-field-collection/Post';

describe('Decorator', ()=>{
  describe('Collection', ()=>{
    it('initialize collection with', ()=>{
      const post = new EmptyPost();
      expect(post.name).toBe('post')
    })
  })

  describe('SmartField', ()=>{
    it('initialize collection with', ()=>{
      const post = new SmartFieldPost();
      expect(post.fields).toHaveLength(1);
      expect(post.fields[0]).toHaveProperty('field', 'popularity');
      expect(post.fields[0]).toHaveProperty('type', 'String');
      expect(post.fields[0].get()).toBe('2/10')
    })
  })
})
