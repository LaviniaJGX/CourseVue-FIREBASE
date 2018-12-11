# Assignment 2 - Vue app - Automated development process.

Name: Guixin Jiang

Student No.:  20082268

## Overview.

...... A statement of the Vue app's context and objectives (just a paragraph)........

This is a course management page. The guildline bar has home page, management course, course, map, about us, contact us, log in and log out.
On the Manage Courses page, you can see the courses connected to the database and their information in the form of a form.  On this page, you can edit and delete a course.
On the course page, you can add a new course by entering the course information.
Login and registration can be realized on the login page.

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (choose the best one). The command to produce this is similar to the following:

     E:\Testing\CourseVue-FIREBASE>npx cypress run --spec cypress/integration/courses.spec.js


====================================================================================================

  (Run Starting)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Cypress:    3.1.3                                                                              ©¦
  ©¦ Browser:    Electron 59 (headless)                                                             ©¦
  ©¦ Specs:      1 found (courses.spec.js)                                                          ©¦
  ©¦ Searched:   cypress\integration\courses.spec.js                                                ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤

  Running: courses.spec.js...                                                              (1 of 1)
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="14.195" tests="2" failures="0">
  <testsuite name="Root Suite" timestamp="2018-12-11T03:56:04" tests="0" failures="0" time="0">
  </testsuite>
  <testsuite name="test delete" timestamp="2018-12-11T03:56:04" tests="1" failures="0" time="10.001">
    <testcase name="test delete allows a course to be deleted" time="10.001" classname="allows a course to be deleted">
    </testcase>
  </testsuite>
  <testsuite name="test edit" timestamp="2018-12-11T03:56:14" tests="1" failures="0" time="4.194">
    <testcase name="test edit allows a course to be edited" time="4.194" classname="allows a course to be edited">
    </testcase>
  </testsuite>
</testsuites>

  (Results)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Tests:        2               ©¦
  ©¦ Passing:      2               ©¦
  ©¦ Failing:      0               ©¦
  ©¦ Pending:      0               ©¦
  ©¦ Skipped:      0               ©¦
  ©¦ Screenshots:  0               ©¦
  ©¦ Video:        false           ©¦
  ©¦ Duration:     14 seconds      ©¦
  ©¦ Spec Ran:     courses.spec.js ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


====================================================================================================

  (Run Finished)


      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ ¡Ì courses.spec.js                           00:14        2        2        -        -        - ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼
    All specs passed!                           00:14        2        2        -        -        -


## Continuous Integration.

. . . URL of the Travis build page for the Vue app, 
https://travis-ci.org/LaviniaJGX/CourseVue-FIREBASE

## Automated Deployment.

.... Specify the URL of the auto-deployed Vue app, 
http://dreammj.surge.sh/

## Extra features.

. . . . Briefly state any extra aspects of your automation process that you feel should be high-lighted . . . . .

1.Each of my web page test files can be run separately.
2.Bundling (Webpack).
3.E2E testing and publih results on travis .
4.Continuous Integration and auto-deployment on surge.


## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     E:\Testing\CourseVue-FIREBASE>npm run cypress

> coursevue@1.0.0 cypress E:\Testing\CourseVue-FIREBASE
> cypress run --record --key af872a02-67dc-472d-80fd-1aff4bdc3cfc



====================================================================================================

  (Run Starting)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Cypress:    3.1.3                                                                              ©¦
  ©¦ Browser:    Electron 59 (headless)                                                             ©¦
  ©¦ Specs:      3 found (courses.spec.js, home.spec.js, url.spec.js)                               ©¦
  ©¦ Params:     Group: false, Parallel: false                                                      ©¦
  ©¦ Run URL:    https://dashboard.cypress.io/#/projects/4zp3o6/runs/60                             ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤

  Running: courses.spec.js...                                                              (1 of 3)
  Estimated: 22 seconds
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="13.242" tests="2" failures="0">
  <testsuite name="Root Suite" timestamp="2018-12-11T03:45:26" tests="0" failures="0" time="0">
  </testsuite>
  <testsuite name="test delete" timestamp="2018-12-11T03:45:26" tests="1" failures="0" time="9.493">
    <testcase name="test delete allows a course to be deleted" time="9.493" classname="allows a course to be deleted">
    </testcase>
  </testsuite>
  <testsuite name="test edit" timestamp="2018-12-11T03:45:36" tests="1" failures="0" time="3.749">
    <testcase name="test edit allows a course to be edited" time="3.749" classname="allows a course to be edited">
    </testcase>
  </testsuite>
</testsuites>

  (Results)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Tests:        2               ©¦
  ©¦ Passing:      2               ©¦
  ©¦ Failing:      0               ©¦
  ©¦ Pending:      0               ©¦
  ©¦ Skipped:      0               ©¦
  ©¦ Screenshots:  0               ©¦
  ©¦ Video:        false           ©¦
  ©¦ Duration:     13 seconds      ©¦
  ©¦ Estimated:    22 seconds      ©¦
  ©¦ Spec Ran:     courses.spec.js ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


  (Uploading Results)

  - Nothing to Upload

©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤

  Running: home.spec.js...                                                                 (2 of 3)
  Estimated: 10 seconds
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="5.308" tests="2" failures="0">
  <testsuite name="Root Suite" timestamp="2018-12-11T03:45:44" tests="0" failures="0" time="0">
  </testsuite>
  <testsuite name="test the ui of home" timestamp="2018-12-11T03:45:45" tests="2" failures="0" time="5.308">
    <testcase name="test the ui of home if the home contains specified element" time="5.197" classname="if the home contains specified element">
    </testcase>
    <testcase name="test the ui of home if the home contains specified context" time="0.111" classname="if the home contains specified context">
    </testcase>
  </testsuite>
</testsuites>

  (Results)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Tests:        2            ©¦
  ©¦ Passing:      2            ©¦
  ©¦ Failing:      0            ©¦
  ©¦ Pending:      0            ©¦
  ©¦ Skipped:      0            ©¦
  ©¦ Screenshots:  0            ©¦
  ©¦ Video:        false        ©¦
  ©¦ Duration:     5 seconds    ©¦
  ©¦ Estimated:    10 seconds   ©¦
  ©¦ Spec Ran:     home.spec.js ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


  (Uploading Results)

  - Nothing to Upload

©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤

  Running: url.spec.js...                                                                  (3 of 3)
  Estimated: 7 seconds
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="5.905" tests="1" failures="0">
  <testsuite name="Root Suite" timestamp="2018-12-11T03:45:54" tests="0" failures="0" time="0">
  </testsuite>
  <testsuite name="test url" timestamp="2018-12-11T03:45:54" tests="1" failures="0" time="5.905">
    <testcase name="test url click nav menu" time="5.905" classname="click nav menu">
    </testcase>
  </testsuite>
</testsuites>

  (Results)

  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ Tests:        1           ©¦
  ©¦ Passing:      1           ©¦
  ©¦ Failing:      0           ©¦
  ©¦ Pending:      0           ©¦
  ©¦ Skipped:      0           ©¦
  ©¦ Screenshots:  0           ©¦
  ©¦ Video:        false       ©¦
  ©¦ Duration:     5 seconds   ©¦
  ©¦ Estimated:    7 seconds   ©¦
  ©¦ Spec Ran:     url.spec.js ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼


  (Uploading Results)

  - Nothing to Upload

====================================================================================================

  (Run Finished)


      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ©°©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©´
  ©¦ ¡Ì courses.spec.js                           00:13        2        2        -        -        - ©¦
  ©À©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©È
  ©¦ ¡Ì home.spec.js                              00:05        2        2        -        -        - ©¦
  ©À©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©È
  ©¦ ¡Ì url.spec.js                               00:05        1        1        -        -        - ©¦
  ©¸©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¼
    All specs passed!                           00:24        5        5        -        -        -


©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤©¤

  Recorded Run: https://dashboard.cypress.io/#/projects/4zp3o6/runs/60

