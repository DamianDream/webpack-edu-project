import Comment from './Comment.js';
import './style/style.css';
import './style/sass/style.sass';
import './style/sass/style.scss';
import userAvatar from './assets/user.jpg';

const comment = new Comment('Lorem ipsum dolor sit amet!', userAvatar);

console.log(comment.toString());
