export default function PrivacyPolicy() {
  return(
    <div className="row justify-content-center">
      <div className="col-8">
        <div><u>Privacy Policy</u></div>

        <div className="mt-4">I don't care about, or want your personal data.</div>
        <div className="mt-3">
          That being said, I use Google services to assist with website analytics and sign-in functionality.
          Google thrive's off your data.
        </div>

        <div className="mt-4">
          <div><u>Google Analytics & Google Tag Manager</u></div>
          codyluth.com uses Google Analytics to track website activity, and Google Tag manager to impliment analytics. 
          Google can, and will, collect your browsing activity for their purposes using cookies or other methods.
        </div>
        <div className="mt-3">
          You can read <a href="https://policies.google.com/privacy" target="_blank">Google's Privacy Policy</a> for more information on their collection of data.
          Feel free to block analytics by using an ad-blocker.
        </div>

        <div className="mt-4">
          <div><u>Google Sign-In</u></div>
          A subset of users are able to sign-in to codyluth.com using Google SSO (or single sign on).
          These users are subject to Google's collecting and tracking of data as well through the use of cookies or other methods.
        </div>
        <div className="mt-3">
          You can read <a href="https://policies.google.com/privacy" target="_blank">Google's Privacy Policy</a> for more information on their collection of data.
        </div>
        <div className="mt-3">
          When using Google SSO, codyluth.com will be given details from your Google account.
          This includes but is not limited too account number, email, name, gender, etc.
          Only the account number will be stored for authentication purposes.
          It will not be used for any other purpose.
        </div>
      </div>
    </div>
  )
}