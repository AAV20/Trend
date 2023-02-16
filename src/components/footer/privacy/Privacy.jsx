import React from 'react'
import style from '../footer.module.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'



export default function Privacy() {
  return (
    <section className={style.privacysection}>
        <div className={style.privacycontainer}>
            <div className={style.privacycontent}>
                <div className={style.privacyblocks}>
                    <h2>Privacy Policy</h2>
                    <span  className={style.spantext}>Date of last revision: November 3, 2022</span>
                    <p>This “Privacy Policy” describes how Designtechnica Corporation (d/b/a Digital Trends and referred to as “we” or “us” or “our”), and our affiliated entities, collect, use, process, and share your personally identifiable information. This Privacy Policy also describes your choices regarding any applicable rights of access, deletion, or correction of your personal information. We refer to personally identifiable information as “information” or “personal data” in this Privacy Policy and it means any information that can identify a person.</p>
                </div>
                <div className={style.privacyblocks}>
                    <h2>THIS PRIVACY POLICY INCLUDES</h2>
                    <ul>
                        <li>
                        <Link className={style.privacylink} to="link1" spy={true} smooth={true} offset={10} duration={1500}>
                        What this Policy Covers
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link2" spy={true} smooth={true} offset={10} duration={1500}>
                        The Types of Information we Collect & How we Collect
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link3" spy={true} smooth={true} offset={10} duration={1500}>
                        Advertising & Affiliate Links
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link4" spy={true} smooth={true} offset={10} duration={1500}>
                        Automatically Collected Information
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link5" spy={true} smooth={true} offset={10} duration={1500}>
                        Cookies
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link6" spy={true} smooth={true} offset={10} duration={1500}>
                        Pixels
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link7" spy={true} smooth={true} offset={10} duration={1500}>
                        Log Files
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link8" spy={true} smooth={true} offset={10} duration={1500}>
                        Device Finger Printing
                        </Link>
                        </li>
                        <li>
                        <Link className={style.privacylink} to="link9" spy={true} smooth={true} offset={10} duration={1500}>
                        How we Use Information we Collect
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.privacyblocks}>
                    <h2 id='link1'>WHAT THIS POLICY COVERS</h2>
                    <p>This “Privacy Policy” describes how Designtechnica Corporation (d/b/a Digital Trends and referred to as “we” or “us” or “our”), and our affiliated entities, collect, use, process, and share your personally identifiable information. This Privacy Policy also describes your choices regarding any applicable rights of access, deletion, or correction of your personal information. We refer to personally identifiable information as “information” or “personal data” in this Privacy Policy and it means any information that can identify a person.
                        <br></br>
                        <br></br>
                        This Privacy Policy does not apply to the information that we collect about employees, contractors, or job applicants. This Privacy Policy also does not apply to information that is collected by third parties, like third party websites that we may link to or promote, third party platforms or content providers, third parties that place advertisements on our Site, ad networks, affiliate marketers or affiliate marketing sites that we may link to, social media platforms or accounts, third-party service providers, widget providers. or other third-party services or applications. This Privacy Policy also does not apply to any information that is not personally identifiable, like aggregated or anonymous information.
                        <br></br>
                        <br></br>
                        Our Site is not directed at children under the age of 13 and we do not knowingly collect information from individuals under the age of 13. If you are under the age of 13, you may not use the Site or provide your information to us through the Site or otherwise. If a child under the age of 13 has provided us with their information without parental or guardian consent, the parent or guardian may contact us by emailing us at privacy@digitaltrends.com. We will remove the information and unsubscribe the child from any applicable services.
                    </p>

                </div>
                
                <div id='link2' className={style.privacyblocks}>
                    <h2>THE TYPES OF INFORMATION WE COLLECT, HOW WE COLLECT IT & OUR BUSINESS PURPOSE</h2>
                    <p>We collect the types of information described below. We provide a summary of how we collect and use information below and more details about how we collect personal information under Advertising and Affiliate Links and Automatically Collected Information. We provide more details about how we use and share information under How we Use Information we Collect and How we Share Information we Collect.  We may link, combine, or supplement the information you provide us with other information we receive from third parties to create inferences.</p>
                    <br></br>
                    <br></br>
                    <p><strong>Identifiers:: Internet protocol (IP) addresses, clickstream data, click ID, or demand side platform ID, mobile ad identifiers, customer number, unique pseudonym, or user alias. Identifiers may also include “probabilistic identifiers” or “user agents” which are means to identify an individual based upon technical characteristics of their device such as hardware address, browser type, operating system. Identifiers also includes “Unique Identifiers” which are persistent identifiers that can be used to recognize an individual or device that is linked to an individual or group of individuals, over time and across different services. We collect this information automatically when you visit and interact with the Site, click links on our Site, engage with our content, click on advertising, or open our emails. We use cookies, pixels, flash cookies or other tracking technology (explained below) (“Automatic Tracking Technologies”). We use this information to identify you and to analyze how you use our Site, to improve your experience, to remember your settings, to evaluate the performance of content, advertisements, or marketing campaigns, to tailor content, advertising or marketing to you, to evaluate or analyze trends, to help our advertising or affiliate program partners provide content or advertising that is relevant to you, to administer contests, sweepstakes, or promotions, for operational or security purposes such as to administer and deliver the Site or services, or to improve our Site or services.
‍</strong></p>
<br></br>
<br></br>
<p><strong>Technical Information:</strong>Connection type, settings, operating system, browser type, IP address, URLs of referring/exit pages, device, device identifiers, or crash data, browser type, Internet service provider (ISP), referrer URL, exit URL, the pages viewed (e.g., HTML pages, graphics, etc.), length of time viewed, operating system, date/time, downloads, geolocation (not precise geolocation). We collect this information automatically when you visit and interact with the Site, click links on our Site, engage with our content, click on advertising, or open our emails. We use Automatic Tracking Technologies to collect this information. We use this information to identify you and to analyze how you use our Site, to improve your experience, to remember your settings, to evaluate the performance of content, advertisements, or marketing campaigns, to tailor content, advertising or marketing to you, to evaluate or analyze trends, to help our advertising or affiliate program partners provide content or advertising that is relevant to you, to administer contests, sweepstakes, or promotions, for operational or security purposes such as to administer and deliver the Site or services, or to improve our Site or services.</p>
                    <h3 id='link3'>Advertising & Affiliate Links</h3>
                    <p>
                    We display content, offers, or advertisements that may be of interest to our users on the Site, or other digital properties or applications. We use Inferences (see “Identifiers” above) and demographic data to identify segments of similar users. We will provide content or advertising that may interest individuals we identify to be similar to that segment based on our Inferences. Advertisements are targeted based on information that we collect directly or that we receive from third parties (like ad networks, ad servers, or through third party affiliate marketing programs, we call these “Advertising Partners”). If we match you to a particular segment, we may provide offers, deals, content, or advertising that may be of interest to that segment, including you, and we may allow our advertising partners to better target their advertisements to that segment, including you (“Cross-Contextual Behavioral Advertising”). We, the third-party businesses we interact with, and our third-party service providers use the information we collect for the purposes disclosed above, but primarily to identify you and to serve relevant advertising or content to you, to analyze performance of advertisements and content, to analyze usage trends, and to target offers, promotions, deals, or content to you on the Site and elsewhere online.
                    <br></br>
                    <br></br>
We and our Advertising Partners use Automatic Tracking Technology to collect information from you and to identify you. We will receive your information from third parties when you click through an advertisement or promotion on the Site, or when you click on an affiliate link in our content or purchase a product from an affiliate link. If you purchase product or service from an affiliate, we do not receive credit card information, or the specific items purchased.
<br></br>
<br></br>
We are not responsible for the privacy practices of any of our Advertising Partners, and we encourage you to read their privacy policies so that you understand how they process information about you.
                    </p>
                    
                </div>
                <div id='link4' className={style.privacyblocks}>
                    <h3>Automatically Collected Information</h3>
                    <p>
                    When you visit the Site, based upon your cookie preferences, a cookie or local storage will be sent to your computer that uniquely identifies your browser. “Cookies” and local storage are small files containing a string of characters that are sent to your computer’s browser and stored on your device when you visit a website. Cookies uniquely distinguish your web browser and keep track of information relating to serving ads on your web browser, such as the type of ads shown and the webpages on which the ads appeared. Advertising Partners place cookies on our Site and combine information they collect from our Site with other information they have independently collected across their network of websites. Advertising Partners collect and use this information under their own privacy policies. If you click on links in our content, our affiliate marketing partners use cookies to collect information about you and combine it with information they collect elsewhere.
<br></br>
<br></br>
We use the following types of cookies on the Site for the following purposes:
                    </p>
                    <br></br>
                    <br></br>
                    <p><strong>Analytics and Performance Cookies: </strong>We use these cookies to collect information about traffic to our Site and how users use our Site. It includes the number of visitors, the websites that referred them to our Site, the pages that they visited on our Site, what time of day they visited, whether they have visited our Site before, and other similar information. We use this information to help operate our Site more efficiently, to gather broad demographic information and to monitor the level of activity. We also use Google Analytics for this purpose. Google Analytics uses its own cookies (e.g., third party cookies) and provides demographic information to us.
</p>
<h3 id='link5'>Cookies</h3>
<p><strong>Functional Cookies/Strictly Necessary Cookies:</strong>These cookies are required to provide the Site and to enable you to use its features.</p>
<br></br>
<br></br>
<p><strong>Social Media Cookies:</strong>These cookies are used when you share information using a social media sharing button or “like” button on our Site or engage with our content on or through social media sites. The social media sites will record that your activities.</p>
<br></br>
<br></br>
<p><strong>Targeted and Advertising Cookies: </strong>The purpose of these cookies is to provide you with a more personal experience and to remember you when you visit our Site. Targeted cookies will track your browsing habits across websites to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests. Based on that information, third-party advertisers can place cookies to enable them to show ads which we/they think will be relevant to your interests while you are on our Site. These cookies also store your location, including your latitude and longitude, which helps us/them show you locale-specific content.</p>
                </div>
                <div className={style.privacyblocks}>
                    <h3>Flash Cookies</h3>
                    <p>A Flash cookie is a data file placed on a device via the Adobe Flash plug-in that is built into or downloaded by you onto your device. Flash cookies are used for various purposes, including, without limitation, enabling a Flash feature and remembering your preferences. For more information about Flash and the privacy choices Adobe offers, visit here. If you choose to adjust your Flash privacy settings on your device some features of the Site may not function properly</p>

                </div>
                <div id='link6' className={style.privacyblocks}>
                    <h3>Pixel Tags</h3>
                    <p>We use “pixel tags,” which are small graphic files that allow us and third parties to monitor the use of the Site and collect usage data. A pixel tag can collect information such as the IP address of the computer that downloaded the page on which the tag appears, the URL of the page on which the pixel tag appears, the time (and length of time) the page containing the pixel tag was viewed, the type of browser that retrieved the pixel tag, and the identification number of any cookie previously placed by that server on your computer. We use pixel tags, either provided by us or by our third party advertisers, social media sites, third party affiliate partners or ad networks, to collect information about your visit, including the pages you view, the links you click and other actions taken in connection with our Site and use them in combination with our cookies. Pixel tags also enable ad networks to serve targeted advertisements to you when you visit our Site or other websites.</p>

                </div>
                <div id='link7' className={style.privacyblocks}>
                    <h3>Log Files</h3>
                    <p>A log file is a file that records events that occur in connection with your use of the Site, such as your service use data.</p>
                </div>
                <div id='link8' className={style.privacyblocks}>
                    <h3>Device fingerprinting</h3>
                    <p>Device fingerprinting is the process of analyzing and combining sets of information elements from your device’s browser, such as JavaScript objects and installed fonts, to create a “fingerprint” of your device and uniquely identify your device and apps.</p>
                </div>
                <div id='link9' className={style.privacyblocks}>
                    <h2>HOW WE USE PERSONAL INFORMATION WE COLLECT</h2>
                    <p>We Use the information that we collect to:</p>
                    <br></br>
                    <br></br>
                    <p>provide the Site, content, or services to you.
process transactions or communicate with you.
provide you with information about products, services, offers, deals, or other information that is relevant to you.
communicate with you about contests, promotions and sweepstakes, upcoming events, or other news about products and services that we or third parties may offer.
provide you with information, products, or services that we believe will interest you, including opportunities from our third party partners.
administer and provide contests, sweepstakes, and promotions, and to select and notify winners.
monitor and analyze trends, usage, engagement, and other activities in connection with our Site or content.
provide certain features or functionality to you, like enabling you to share content, enabling downloads, push notifications, or ad block features.
Identify you, relate you to a segment, personalize the Site, content, or our services.
provide, support, secure, monitor, and improve our Site and content.
analyze our Site and content, support or trouble shoot issues related to our Site or content, or for other internal business purposes.
contact you with administrative communications, including changes to terms or policies.
send you technical notices, updates, security alerts, support or administrative messages and to respond to your comments, questions, or other messages or requests.
detect, investigate, and prevent fraudulent transactions or other illegal or harmful activities.
protect our or our third-party partner’s rights and property.
protect the security or integrity of the Site or our services.
comply with regulatory and legal obligations.
For other purposes that may be disclosed to you at the time of collection.</p>
                </div>
                <div id='link9' className={style.privacyblocks}>
                    <h2>HOW WE SHARE PERSONAL DATA</h2>
                    <p>We may share information as follows:</p>
                    <br></br>
                    <br></br>
<p><strong>With your Consent or To Fulfill the Purpose for Which You Provided It:</strong>We may share your information with companies, organizations, or other third parties with your consent, or to fulfil the purpose for which you provided the information.</p>
<br></br>
<br></br>
<p><strong>With Advertising Partners or Content Platforms: </strong>We may share information with our Advertising Partners, analytics providers, content platforms, or technology integration partners. We may share Technical Information, Identifiers, other identifiable information, or demographics and/or aggregate information with these partners. They may receive this information from their own Automatic Tracking Technologies or from our Automatic Tracking Technologies.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
