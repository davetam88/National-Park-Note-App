import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

export default function AboutContent(props) {

  return (
    <>
      <main>
        <div class="about-content-container">
          <h1>
            Nation Park Trip Planner
        </h1>

          <p>

            All the information you need to know about your favorite National Parks in the United States in one easy to
            use
            APP. You
            can narrow down your search by State and Activities. Once your park(s) are located, you can see more pictures
            and/or
            Youtube videos for a particular park.
            <br />
            <br />
            To see a user demo
            acount,
            enter 'demo' or 'Demo' as the user and 'pwdemo' as the password in the
          <span> </span>
            <Link to='/login' >
              LOGIN
            </Link >
            <span> </span>
          page.
            <br />
            <br />
          </p>
          <h1>
            The APP's Inspiration
          </h1>

          <p>
            The APP's inspiration came from my love of nature and the outdoors, and the unspoiled state of National Parks
            in
            the
            United States.
          </p>

          <h1> The APP's Features</h1>
          <p>
            The user of this APP can select/display any National Parks by State and further narrow down the park with your
            choice
            of Activity. Once selected, the user will be at the Park's View page, in which multiple Parks that meet that
            search
            criterion will be displayed, For each park, the APP will show a feature picture of the Park, the Park's
            official page
            Link, and address. The user can then visually explore their favorite park with the 'More Picture' and 'Videos'
            buttons.
          </p>

          <h1>Login In User Feature</h1>

          <p>The APP allows the user to create his/her own account; Once an account is created, the user would be
          able to
          save the park's information, rate it with a ranking number and add their custom
          notes, all
          the information will be stored in the APP and they can be used later. The user can sort these stored parks by
          using the following criteria: <b>Park Name, Rating, State Name,   Activity.</b> <br />
            <br />
          </p>
        </div>
      </main>
    </>
  )
}

