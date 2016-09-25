import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const AProjects = new Mongo.Collection('projectsCollection');
export const a = '';

if (Meteor.isServer) {
  Meteor.startup(() => {
    const db = Mysql.connect('mysql://root@127.0.0.1/wecan');
    const Projects = db.meteorCollection('a_project', 'projectsCollection');
    Meteor.publish('allProjects', () => Projects.find());
  });
}
