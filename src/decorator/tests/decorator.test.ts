/* eslint-disable jest/expect-expect */
import express from 'express';
import request from 'supertest';

import * as Liana from '../../tests/utils/PermissionMiddlewareCreator'

import { SMART_ACTION_TYPE } from './../../types/SmartAction';
import { Post as EmptyPost } from './sample/empty-collection/Post';
import { Post as SmartFieldPost } from './sample/smart-field-collection/Post';

import { Post as PostWithSmartActions } from './sample/collection-with-smart-action/Post';
import { InvalidPost as InvalidPostWithSmartActions } from './sample/collection-with-smart-action/InvalidPost';


import { AddLike } from './sample/empty-smart-action/AddLike';
import { AddLike as AddLikeIntegrated } from './sample/collection-with-smart-action/AddLike';
import { AddLike as AddLikeWithFields } from './sample/smart-action-with-fields/AddLike';

describe('Decorator', ()=>{
  describe('Collection', ()=>{
    it('initialize collection', ()=>{
      const post = new EmptyPost();
      expect(post.name).toBe('post')
    })

    it('initialize collection with smartActions', ()=>{
      const post = new PostWithSmartActions();

      expect(Object.keys(post.actions)).toHaveLength(1);
      expect(post.actions['add-like']).toBeInstanceOf(AddLikeIntegrated)
    })

    it('should create route for smart-action endpoint', ()=>{
      const app = express();

      const post = new PostWithSmartActions();
      post.initialize(app, Liana)

      request(app)
        .post(`/post/smart-action/add-like`)
        .expect(201);
    });

    it('should throw error if called initialize without name defined', ()=>{
      const app = express();

      const invalidPost = new InvalidPostWithSmartActions();

      expect(()=>{
        invalidPost.initialize(app, Liana);
      }).toThrowError("Cannot initialize collection with undefined name")
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

  describe('SmartAction', ()=>{
    it('initialize smart action', ()=>{
      const addLike = new AddLike();
      expect(addLike.label).toBe('Ajouter un like');
      expect(addLike.type).toBe(SMART_ACTION_TYPE.SINGLE);
    })

    it('initialize smart action with field', ()=>{
      const addLike = new AddLikeWithFields();
      expect(addLike.label).toBe('Ajouter un like');
      expect(addLike.type).toBe(SMART_ACTION_TYPE.SINGLE);

      expect(addLike.fields).toHaveLength(2);

      expect(addLike.fields[0]).toHaveProperty('field', 'Nombre de likes à ajouter');
      expect(addLike.fields[0]).toHaveProperty('type', 'Number');

      expect(addLike.fields[1]).toHaveProperty('field', 'Date');
      expect(addLike.fields[1]).toHaveProperty('type', 'DateOnly');
    })
  })
})
