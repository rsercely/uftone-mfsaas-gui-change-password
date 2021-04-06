' assumes Chrome browser is open
' page does not matter
' exitaction
Const startingUser = 1
const newPW = "Training2021!"
Const currPW = "Training2020!"
currUser = startingUser

For currUser = startingUser To 30 Step 1
	If currUser < 10 Then
		userStr = "workshop0" & currUser & "@microfocus.com"
	else
		userStr = "workshop" & currUser & "@microfocus.com"
	End If
	
	Browser("Google").Navigate "https://home.software.microfocus.com/myaccount/#/myProducts" @@ hightlight id_;_1837230_;_script infofile_;_ZIP::ssf28.xml_;_
	Browser("Google").ClearCache
	Browser("Google").Refresh
	
	Browser("Google").Page("Login - MyAccount").WebEdit("federateLoginName").Set userStr @@ hightlight id_;_Browser("Google").Page("Login - MyAccount").WebEdit("federateLoginName")_;_script infofile_;_ZIP::ssf3.xml_;_
	Browser("Google").Page("Login - MyAccount").WebButton("CONTINUE").Click @@ hightlight id_;_Browser("Google").Page("Login - MyAccount").WebButton("CONTINUE")_;_script infofile_;_ZIP::ssf4.xml_;_
	Browser("Google").Page("Login - MyAccount").WebEdit("password").Set currPW
	Browser("Google").Page("Login - MyAccount").WebButton("SIGN IN").Click	
		
	If  Browser("Google").Page("MyAccount - My Products").WebElement("Gear").Exist (15) then @@ script infofile_;_ZIP::ssf29.xml_;_
		wait 3
		Browser("Google").Page("MyAccount - My Products").WebElement("Gear").Click @@ script infofile_;_ZIP::ssf29.xml_;_
		wait 3
	end if 

	Browser("Google").Page("MyAccount - My Products").WebElement("My Authentication Settings").Click @@ script infofile_;_ZIP::ssf30.xml_;_
	Browser("Google").Page("Micro Focus - Authentication_3").WebElement("Password").Click @@ script infofile_;_ZIP::ssf31.xml_;_
	Browser("Google").Page("Micro Focus - Authentication_3").WebElement("Password").Click @@ script infofile_;_ZIP::ssf32.xml_;_
	Browser("Google").Page("Micro Focus - Authentication_3").Link("Change").Click @@ script infofile_;_ZIP::ssf33.xml_;_
	
	Browser("Google").Page("Micro Focus - Change Password").WebEdit("current PW").Set currPW
	Browser("Google").Page("Micro Focus - Change Password").WebEdit("new PW").Set newPW
	Browser("Google").Page("Micro Focus - Change Password").WebEdit("confirm new PW").Set newPW
	'even as a live  user, I have found that sometimes i have to go back and set it again!
	Browser("Google").Page("Micro Focus - Change Password").WebEdit("new PW").Set newPW

	Browser("Google").Page("Micro Focus - Change Password").WebElement("By signing up, you agree").Click @@ hightlight id_;_Browser("Google").Page("Micro Focus - Change Password").WebElement("By signing up, you agree")_;_script infofile_;_ZIP::ssf15.xml_;_
	Browser("Google").Page("Micro Focus - Change Password_2").WebButton("SAVE").Click @@ hightlight id_;_Browser("Google").Page("Micro Focus - Change Password 2").WebButton("SAVE")_;_script infofile_;_ZIP::ssf16.xml_;_
	
	wait 5
	if Browser("Google").Page("Micro Focus - Change Password_3").Link("Back to settings  >").Exist(5) then @@ hightlight id_;_Browser("Google").Page("Micro Focus - Change Password 3").Link("Back to settings  >")_;_script infofile_;_ZIP::ssf23.xml_;_
		Browser("Google").Page("Micro Focus - Change Password_3").Link("Back to settings  >").Click @@ hightlight id_;_Browser("Google").Page("Micro Focus - Change Password 3").Link("Back to settings  >")_;_script infofile_;_ZIP::ssf23.xml_;_
		Browser("Google").Page("Micro Focus - Authentication_2").Link("Back >").Click @@ hightlight id_;_Browser("Google").Page("Micro Focus - Authentication 2").Link("Back >")_;_script infofile_;_ZIP::ssf24.xml_;_
	end if
	Browser("Google").Page("MyAccount - My Products").WebButton("LogOut").Click
'	Browser("Google").home - says not supported. runs without it @@ hightlight id_;_2885574_;_script infofile_;_ZIP::ssf18.xml_;_
	
Next
