import './register.scss';

import { Button, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { RegisterBox } from '../../components/register-box';

const Home = () => {
  return (
    <div className="register-page">
      <div className="top-block">
        <img
          alt="Under development"
          src="../../assets/register/robotization.svg"
          style={{
            position: 'absolute',
            width: 1200,
            height: 454,
            top: 0,
            left: 0,
          }}
        />
        <img
          alt="Under development"
          className="top-block__image"
          src="../../assets/register/robotization-background.svg"
          style={{
            position: 'absolute',
            width: 1200,
            height: 454,

            top: 0,
            left: 0,
          }}
        />
        <span className="top-block__title">
          Expand the reach of your postgraduate research.
        </span>
        <div className="top-block__sub-text">
          The journey of your dissertation or thesis isn’t over yet. Releasing
          it into the world as part of the most comprehensive collection of
          dissertations and theses in the world starts here. With ETD
          Administrator we help you and your institution manage your
          dissertation submission digitally in a single, easy to use website.
        </div>

        <Button
          color="primary"
          variant="contained"
          className="top-block__button"
        >
          Create an account now
        </Button>

        <Typography className="top-block__login">
          Have an account? <NavLink to="/login">Sign In</NavLink>
        </Typography>
      </div>
      <div className="middle-block">
        <div className="middle-block__top">
          <Typography
            className="middle-block__title"
            align="center"
            color="primary"
          >
            Welcome to the new ETD Administrator
          </Typography>
        </div>
        <div className="middle-block__bottom">
          <Paper className="middle-block__card">
            <Typography
              className="middle-block__sub-title"
              align="center"
              color="primary"
            >
              For Researchers
            </Typography>
            <img
              alt="Under development"
              src="../../assets/register/researchers.svg"
            />
            <Typography
              className="middle-block__text"
              align="center"
              color="primary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
            <Button color="primary" variant="outlined">
              read more
            </Button>
          </Paper>
          <Paper className="middle-block__card">
            <Typography
              className="middle-block__sub-title"
              align="center"
              color="primary"
            >
              For Institutions
            </Typography>
            <img
              alt="Under development"
              src="../../assets/register/institutions.svg"
            />
            <Typography
              className="middle-block__text"
              align="center"
              color="primary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
            <Button color="primary" variant="outlined">
              read more
            </Button>
          </Paper>
        </div>
      </div>
      <div className="bottom-block">
        <Paper>
          <Typography
            align="center"
            color="primary"
            className="bottom-block__top"
          >
            Our Submission Process
          </Typography>
          <div className="bottom-block__line">
            <img
              className="left"
              alt="Under development"
              src="../../assets/register/submit.svg"
            />
            <Paper>
              <Typography align="left" color="primary">
                1. Submit
              </Typography>
              <div>
                You're done with the hard part. You've written your thesis or
                dissertation and it's been approved. Now, by submitting your
                work to ProQuest, designated an official off-site repository for
                the U.S. Library of Congress, you can make it available to the
                world's research community. Most authors complete the submission
                step in 30 minutes or less.
              </div>
            </Paper>
          </div>

          <div className="bottom-block__line">
            <Paper>
              <Typography align="left" color="primary">
                2. Review
              </Typography>
              <div>
                The ETD administrator at your institution reviews your
                submission. Typically, administrators will be checking to make
                sure your submission includes all of the information required by
                your institution. Institutions often enforce their own style and
                formatting standards, so they'll also be looking to make sure
                your submission adheres to those standards.
              </div>
            </Paper>

            <img
              className="right"
              alt="Under development"
              src="../../assets/register/review.svg"
            />
          </div>

          <div className="bottom-block__line">
            <img
              className="left"
              alt="Under development"
              src="../../assets/register/revise.svg"
            />
            <Paper>
              <Typography align="left" color="primary">
                3. Revise and Approve
              </Typography>
              <div>
                After reviewing your submission, your institutional
                administrator will inform you of any necessary revisions. You
                make the revisions and upload the changes to your existing
                submission. When no more revisions are needed, the administrator
                approves your submission. The next step will be to deliver it to
                your institution's repository, and to ProQuest, within
                applicable policies and timelines enforced by your institution.
              </div>
            </Paper>
          </div>

          <div className="bottom-block__line">
            <Paper>
              <Typography align="left" color="primary">
                4. Deliver
              </Typography>
              <div>
                With your submission approved, your administrator delivers it to
                your institution's repository, and to ProQuest. As with any
                other content available on the ProQuest platform, work needs to
                be done before your dissertation or thesis can be made
                discoverable on ProQuest. The average time it takes to do this
                work is 4–6 weeks. When the work is complete, your dissertation
                or thesis is ready to be made available on ProQuest. Any embargo
                period you specified will be enforced when your work is on
                ProQuest.
              </div>
            </Paper>
            <img
              className="right"
              alt="Under development"
              src="../../assets/register/deliver.svg"
            />
          </div>

          <div className="bottom-block__line">
            <img
              className="left"
              alt="Under development"
              src="../../assets/register/done.svg"
            />
            <Paper>
              <Typography align="left" color="primary">
                5. You're Done
              </Typography>
              <div>
                ProQuest staff ensure formatting and details about your work are
                correct before uploading it and making it discoverable in
                ProQuest. If embargoed, your dissertation or thesis will become
                available when the embargo period you specified has passed.
                We'll notify and congratulate you when your work is available
                and discoverable on ProQuest. If you ordered print copies of
                your work during the submission step, visit the ProQuest Support
                Center to learn about our process for publishing your work on
                ProQuest and fulfilling your print order.
              </div>
            </Paper>
          </div>
        </Paper>
      </div>
      <div className="register">
        <RegisterBox></RegisterBox>
      </div>
    </div>
  );
};

export default Home;
