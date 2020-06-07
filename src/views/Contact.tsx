import React from 'react';
import { Title } from '../components';

const Contact: React.FC = () => (
  <div className="Contact">
    <div>
      <Title title={'Contact'} />
      <form className="Contact__form pt--2">
        <input className="Contact__input mb--1" type="text" name="name" placeholder="Name" />
        <input
          className="Contact__input mb--1"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <textarea className="Contact__textarea" name="message" placeholder="Message"></textarea>
        <button className="Contact__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
