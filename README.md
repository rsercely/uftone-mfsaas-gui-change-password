# uftone-mfsaas-gui-change-password

# This UFT One test will reset the passwords for the training account in Micro Focus SaaS
There are two UFT tests within this repository.

* changeSaaSPW
* changeOneSaasPW10Times

## changeSaaSPW
This test is designed to change the passwords for the training users. It assumes that all users have the same name, with only a number difference at the end. It also assumes that the passwords have simply expired, and that the new password is **brand new**, so does not require the changing 12 times that is part of the other test.

It has conditional statements, so that whether the password was just set and must be reset, or if the password is ok, the password gets set to the new password.

The test assumes that there is one browser open on the desktop.

It has a second action that verifies that the new PW works for all users.

## changeOneSaasPW10Times
This test assumes that the password has been forgotten, and that the "lost password" request has been made, and that SaaS reset link page has been opened on the desktop. 

There are three different parts of the test:
1. An initial password reset
2. A loop, changing the password 11 more times
3. Code to set the password to the final, desired value.

The values used are const values, and should be changed before running. For example, the temp password root in the test is "Nov2020_" (which was the date the test was created), and then a number is simply appended to it.

The test then calls a hard *testExit*. All of the other code is basically a copy of the changeSaasPW test. I left that in, in case it is ever desired to have this test reset passwords for many users.