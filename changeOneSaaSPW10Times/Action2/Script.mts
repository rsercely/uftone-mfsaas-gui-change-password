' assumes browser is open
Const startingUser = 1
Const newPW = "Hackathon2020!"
currUser = startingUser

For currUser = startingUser To 30 Step 1
	If currUser < 10 Then
		userStr = "workshop0" & currUser & "@microfocus.com"
	else
		userStr = "workshop" & currUser & "@microfocus.com"
	End If
	
	Browser("Saas Browser").Navigate "https://home.software.microfocus.com/myaccount/#/myProducts" @@ hightlight id_;_1837230_;_script infofile_;_ZIP::ssf2.xml_;_
	Browser("Saas Browser").Page("Login - MyAccount").WebEdit("federateLoginName").Set userStr
	Browser("Saas Browser").Page("Login - MyAccount").WebButton("CONTINUE").Click @@ hightlight id_;_Browser("Saas Browser").Page("Login - MyAccount").WebButton("CONTINUE")_;_script infofile_;_ZIP::ssf9.xml_;_
	Browser("Saas Browser").Page("Login - MyAccount").WebEdit("password").Set newPW
	Browser("Saas Browser").Page("Login - MyAccount").WebButton("SIGN IN").Click @@ hightlight id_;_Browser("Can’t reach this page").Page("Login - MyAccount").WebButton("SIGN IN")_;_script infofile_;_ZIP::ssf5.xml_;_
'	Browser("Saas Browser").Page("Login - MyAccount").WebEdit("federateLoginName").Submit @@ hightlight id_;_Browser("Can’t reach this page").Page("Login - MyAccount").WebEdit("federateLoginName")_;_script infofile_;_ZIP::ssf6.xml_;_
	Browser("Saas Browser").Page("MyAccount - My Products").WebElement("StormRunner Load - Workshop").Check CheckPoint("StormRunner Load - Workshop A recommended") @@ hightlight id_;_Browser("Can’t reach this page").Page("MyAccount - My Products").WebElement("StormRunner Load - Workshop")_;_script infofile_;_ZIP::ssf7.xml_;_
	Browser("Saas Browser").Page("MyAccount - My Products").WebButton("LogOut").Click @@ hightlight id_;_Browser("Can’t reach this page").Page("MyAccount - My Products").WebButton("LogOut")_;_script infofile_;_ZIP::ssf8.xml_;_
next
