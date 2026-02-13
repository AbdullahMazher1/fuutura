"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Icon components
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 1V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 1V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 5H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3C4.66667 3 2.07333 5.07333 1 8C2.07333 10.9267 4.66667 13 8 13C11.3333 13 13.9267 10.9267 15 8C13.9267 5.07333 11.3333 3 8 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 5.16766C0.5 5.78062 0.620692 6.38759 0.855186 6.95389C1.08968 7.5202 1.43338 8.03476 1.86667 8.46819C2.29996 8.90162 2.81434 9.24544 3.38046 9.48001C3.94658 9.71458 4.55334 9.83531 5.1661 9.83531C5.77886 9.83531 6.38562 9.71458 6.95174 9.48001C7.51785 9.24544 8.03224 8.90162 8.46553 8.46819C8.89881 8.03476 9.24252 7.5202 9.47701 6.95389C9.7115 6.38759 9.83219 5.78062 9.83219 5.16766C9.83219 4.55469 9.7115 3.94773 9.47701 3.38142C9.24252 2.81512 8.89881 2.30056 8.46553 1.86713C8.03224 1.43369 7.51785 1.08988 6.95174 0.855304C6.38562 0.620732 5.77886 0.5 5.1661 0.5C4.55334 0.5 3.94658 0.620732 3.38046 0.855304C2.81434 1.08988 2.29996 1.43369 1.86667 1.86713C1.43338 2.30056 1.08968 2.81512 0.855186 3.38142C0.620692 3.94773 0.5 4.55469 0.5 5.16766Z" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5001 12.4997L8.5 8.49902" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

// Sample blog data array - exported for use in detail page
export const blogsData = [
  {
    id: 1,
    title: "Fuutura KYC: Stay on Top of Compliance ",
    description: `The world of Web3 (not to mention the rest of the fast-growing digital economy) is no exception and regulatory compliance is no longer merely a good practice but a must. As global insurers continue to examine activities and demand greater transparency decentralized ecosystem organizations operating in a business mode need to identify effective means of remaining compliant in a reliable efficient and scalable manner. And this is where Fuutura KYC comes in.
Fuutura KYC is reinventing the process of Web3 companies managing Know Your Customer (KYC) requirements through a powerful all-in-one compliance management tool. Fuutura KYC also streamlines the previously complex and fragmented process of real-time monitoring of KYC statuses regulatory filings as well as real-time response to compliance alerts.
We will discuss how Fuutura KYC can keep businesses ahead of compliance in the Web3 sector and why it could be exactly the tool your project needs.
Why Compliance Matters in Web3
Web3 is a paradigm shift- centralized control to ecosystems that are decentralized. Yet along with this change also comes the task of providing transparency trust and security to every stakeholder.
Cryptocurrency regulators are increasing their control over crypto exchanges NFT worlds decentralized autonomous organizations and decentralized finance protocols. Under the AML Anti Money Laundering and CFT Combating the Financing of Terrorism rules the non compliance may result in:
Hefty fines
Legal actions
Reputational damage
Loss of user trust
Platform restrictions or bans
That is why companies need to possess strong KYC and compliance systems. Regrettably even traditional KYC systems cannot be entirely deployed within the Web3 context because of the outdated procedures and a lack of real-time tracking.
Introducing Fuutura KYC: Compliance Simplified
Fuutura KYC is a Web3-networked KYC and compliance management platform. It integrates automation real time monitoring and actionable insights into a single intuitive interface-making compliance not only doable but scalable.
Key Features of Fuutura KYC:
1. Real-Time KYC Tracking
Keeps track of the KYC status of all users or entities in real time. Status changes are automatically updated with Fuutura KYC so you can be ahead of possible risks and suspicious activity.
2. Regulatory Filings Made Easy
Gone are the days of digging through paperwork or spreadsheets. With Fuutura KYC you can create prepare and submit regulatory reports right on the platform which saves time and minimizes errors.
3. Actionable Compliance Alerts
Receive an immediate notification of compliance problems. It could be an expired document or a flagged transaction or even a regulatory deadline Fuutura KYC will remind you to act before the problem grows.
4. Seamless Integration
Fuutura KYC simply connects with your existing Web3 system such as wallets dApps exchanges and DAOs. This would make your experience smooth without interfering with your operations.
5. Smart Automation
Intelligent automation is deployed on the platform to detect suspicious patterns risk scores and anomalies--allowing your compliance team to concentrate on the most important decisions.
Who Is Fuutura KYC For?
Fuutura KYC is designed to support a wide range of players in the Web3 and crypto ecosystem:
Crypto Exchanges: Monitor user activity and verify identities with confidence.
NFT Marketplaces: Ensure artists and buyers meet compliance standards.
DeFi Protocols: Automate compliance while preserving decentralization.
DAOs: Stay compliant with minimal human intervention.
Web3 Startups: Launch faster by building compliance into your foundation.
The Benefits of Using Fuutura KYC
Enhanced Transparency and Trust
In Web3 trust is everything. Fuutura KYC helps build user trust: it will verify everyone involved and ensure that your platform is safer and more authoritative.
Improved Operational Efficiency
Auto-complete time-intensive compliance processes minimize manual error rates and liberate your staff to work on strategic growth.
Global Regulatory Coverage
Fuutura KYC is designed with international compliance in mind and helps to comply with regulations such as GDPR FATF FINCEN MiCA and others.
Scalability
Whether you have 100 users or 1 million Fuutura KYC can grow without any difficulties and you won't have to sacrifice compliance to accommodate your business size.
Why Fuutura KYC Stands Out
Fuutura KYC is an end-to-end comprehensive solution to the needs of modern Web3 businesses as opposed to legacy systems or other partial compliance tools.
User-Centric Design
Fuutura KYC is user-friendly and is designed to provide access to compliance and software through a clean and easy to use dashboard designed to make compliance user-friendly across both technical and non-technical users.
Data Privacy and Security
Fuutura KYC follows stringent data protection policies to safeguard the information of the user as it is stored processed and sent.
Developer-Friendly APIs
Developers can plug Fuutura KYC into smart contracts apps or wallets using well documented APIs enabling custom workflows and automation.
The Future of Compliance in Web3
The future of the regulatory environment remains unclear so the companies that start compliance early will have a competitive advantage. Fuutura KYC is a long-term solution rather than a short-lived one due to its foresight facilities.
Tighter identity checks cross-border data exchange and additional real-time monitoring are only likely to increase in the coming years. Fuutura KYC is evolving continuously to address these challenges so that your business can stay compliant today and in the future.
Getting Started with Fuutura KYC
Implementing Fuutura KYC is straightforward:
Sign up and set your compliance parameters.
Integrate with your existing systems using Fuutura APIs.
Onboard users with automated KYC workflows.
Monitor and manage compliance from your dashboard.


Fuutura KYC helps you make compliance an asset not a liability whether you are developing a new platform or improving your current one.
Final Thoughts
Compliance is not just essential in a world where Web3 is expanding fast and regulators are breathing down their necks. Fuutura KYC keeps you ahead of the pack by providing a scalable usern friendly smart platform to manage your KYC and compliance requirements.
The Fuutura KYC transforms regulatory compliance not only into a challenge but also a competitive advantage by using real time insights automation and seamless integrations.
Waiting until you have a compliance issue to derail your growth is not a good idea. Remain compliant with Fuutura KYC: the reliable supervisor of Web3 risk management.`,
    date: "Feb 13, 2026",
    readTime: "5 min read",
    category: "Trading",
    image: "/Images/sample-blog-1.jpg" // Sample image path
  },
  {
    id: 2,
    title: "Why Fuutura is the Ultimate KYC and Compliance Solution for Web3 PlatformsRisk Management Strategies for Crypto Traders",
    description: `As the terrain of Web3 continues to change at lightning speed, trust transparency and security may amount to more than just buzzwords they are a pillar of success. Whether you are a DeFi application NFT marketplace DAO or crypto exchange your users are looking to submit transactions and execute quickly and securely. Meanwhile, regulators across the globe are becoming much stricter on the compliance issues related to digital identity and the prevention of fraud.
This is where Fuutura steps in.
Fuutura is a Web3 native KYC (Know Your Customer) and compliance tool. Built with web3 speed, security and scalability in perspective Fuutura applications allow Web3 businesses to onboard users faster, remain compliant in a cross-border environment and eliminate fraud risks without touching the decentralized philosophy.
Now let us understand why Fuutura is a reliable option of modern Web3 platforms.
What Makes Fuutura the Best KYC and Compliance Tool for Web3?
1. Instant Secure KYC for Lightning-Fast Onboarding
The welcome process and user onboarding are one of the initial user interactions with your platform. A clumsy sluggish or unsafe KYC procedure can lead to drop offs, higher churn, and ruination of trust.
Fuutura addresses this through real time secure KYC verification allowing your users to onboard within seconds rather than hours. During the verification of people or organizations, Fuutura conducts a highly sophisticated biometric verification process backed by AI-powered document reading and global identity libraries as well as ensuring results are returned in real time.
Key Benefits:
Reduce onboarding time by up to 80%
Enhance user experience with seamless verification flows
Eliminate manual review errors and bottlenecks


In a competitive Web3 market, first impressions count. Fuutura ensures your users get the best start possible.
2. Global Compliance to Meet Regulatory Demands
Web3 is international in design--as complexities of compliance are. Whether it is the GDPR in Europe, FinCEN regulations in the US or MAS guidelines in Singapore, there is a plethora of regulations to stay compliant with.
Fuutura makes global compliance simple.
Owing to the in existence of pre-made regulatory framework and dynamic compliance rules, Fuutura keeps your platform up and running with the latest KYC/AML (Anti-Money Laundering) requirements across jurisdictions. Our system keeps on changing on the basis of the changing global and regional needs.
Features:
Automated compliance workflows for over 100+ countries
Real-time regulatory updates
Sanction and PEP screening
As you move into new markets or support Web3 users around the globe Fuutura will have you and your Web3 enterprise legally compliant and ready to audit.
3. Advanced Fraud Detection & Risk Management
A well-known threat using the decentralized ecosystem is fraud. Whether it is identity spoofing, multi-accounting, money laundering, the malicious actors are continuously trying new things.
Fuutura gives you cutting edge fraud detection and risk scoring functionality to future proof your platform.
With geolocation tracking and document forensics of AI-driven behavior analytics Fuutura detects suspicious activity before it issues a problem. You will be provided with real-time alerts and risk profiles information you can use to make sound decisions but you do not have to slow down the operations.
Security Features:
Multi-factor identity verification
IP reputation scoring
Synthetic identity detection
Continuous risk monitoring
With Fuutura you can confidently scale your platform while keeping fraud and abuse at bay.
Why Web3 Platforms Choose Fuutura 
Your Web3 users expect instant access rock-solid privacy and security at every step. With Fuutura you get a partner who understands the unique demands of decentralized platforms.
Here’s what sets Fuutura apart:
Built for Web3: Unlike traditional KYC providers Fuutura was designed from the ground up for blockchain and decentralized ecosystems.
Seamless Integration: With robust APIs, SDKs and plug-and-play modules Fuutura integrates easily with wallets dApps and smart contracts.
User-First Design: A sleek intuitive user interface ensures high conversion rates and low abandonment.
Privacy-Preserving Architecture: We use encryption zero-knowledge proofs and decentralized identity protocols to safeguard user data.
Whether you’re launching a new dApp or scaling an existing Web3 product Fuutura provides the trust layer that users and regulators demand.
Use Cases: Fuutura Across the Web3 Ecosystem
Fuutura serves a wide range of Web3 platforms including:
DeFi Protocols
Ensure that only verified users access sensitive financial services. Reduce risk of fraud and comply with DeFi regulations without slowing down user flows.
NFT Marketplaces
Prevent fake accounts and fraudulent listings. Ensure that artists and collectors are who they say they are.
DAOs
Enable secure compliant participation in decentralized governance with identity and role verification.
Crypto Exchanges & Wallets
Speed up onboarding, simplify withdrawals and meet licensing requirements with out-of-the-box KYC and AML solutions.
Wherever trust and compliance matter Fuutura is the answer.
How Fuutura Helps You Stay Ahead
In Web3 innovation moves fast—but so do risks and regulations. Fuutura empowers you to move faster while staying safe, compliant and trusted.
Here’s how Fuutura keeps you ahead of the curve:
Future-Proof Compliance: Automated updates to global KYC/AML requirements
Security by Design: End-to-end encryption and GDPR-compliant data handling
Global Reach: Support for 100+ countries and languages
Enterprise-Grade Reliability: 99.99% uptime and SLA-backed performance
Your success depends on trust Fuutura  helps you build and maintain it at scale.
Conclusion
As the Web3 space matures, platforms that prioritize trust security and compliance will lead the charge. Fuutura is your partner in making that happen.
Whether you're launching a DeFi protocol scaling an NFT platform or building the next big DAO Fuutura helps you:
Onboard users quickly and securely
Stay compliant with global regulations
Protect your platform from fraud and abuse
Don’t let manual KYC and fragmented compliance hold you back. Choose Fuutura and unlock frictionless growth for your Web3 business.
FAQs
1. Is Fuutura compliant with GDPR and other privacy laws?
Yes. Fuutura is fully compliant with GDPR, CCPA, and other data protection regulations. User data is encrypted and handled with strict privacy controls.
2. How long does the KYC process take with Fuutura ?
Most verifications are completed in under 60 seconds thanks to real-time AI-powered verification.
3. Can Fuutura integrate with decentralized wallets?
Absolutely. Fuutura offers seamless integration with MetaMask, WalletConnect, and other leading wallet providers.
4. What types of fraud can Fuutura detect?
Fuutura detects identity fraud, document forgery, synthetic identities, multi-accounting, and other advanced threats using AI and behavioral analytics.
`,
    date: "Feb 13, 2026",
    readTime: "5 min read",
    category: "Trading",
    image: "/Images/sample-blog-2.jpg" // Sample image path
  },
  {
    id: 3,
    title: "Fuutura Pro Business: Powering Secure and Scalable Web3 Adoption for Enterprises",
    description: `As the digital economy evolves one truth becomes increasingly clear — trust and compliance are the foundations of sustainable Web3 growth. While blockchain technology enables decentralization transparency and global connectivity businesses entering this space often face complex regulatory landscapes fragmented compliance solutions and growing cybersecurity risks.
That’s where Fuutura Pro Business comes in.
From compliance to risk management Fuutura Pro Business is built to be the backbone of enterprise Web3 adoption. The platform empowers organizations to onboard users securely monitor KYC Know Your Customer processes in real time and manage global risk all from a unified intelligent dashboard designed for simplicity speed and scalability.
The Challenge: Bridging Web2 Compliance Standards with Web3 Innovation
For many enterprises entering the Web3 space is both an opportunity and a challenge. On one hand the potential of blockchain — transparency automation and decentralized ownership — promises immense business value. On the other hand regulatory uncertainty compliance costs and operational risks make enterprise adoption complex.
Traditional compliance frameworks were built for centralized systems where user data identity verification and transaction oversight could be easily controlled. Web3 however introduces decentralized networks pseudonymous identities and cross-border interactions, complicating the standard compliance approach.
Enterprises are now asking:
How can we ensure user safety and regulatory compliance while maintaining Web3’s decentralized integrity?
How can risk be monitored in real time across multiple jurisdictions?
How can businesses build trust with users without sacrificing privacy or innovation?
Fuutura Pro Business was created to answer these questions.
The Fuutura Pro Business Vision: Compliance That Scales with Innovation
At its core Fuutura Pro Business envisions a Web3 world where compliance security and innovation work together not against each other.
The platform serves as a comprehensive compliance and risk management infrastructure for enterprises exchanges DeFi projects and Web3 service providers. It delivers automated data driven compliance intelligence that helps businesses grow responsibly without being slowed down by manual processes or regulatory ambiguity.
Fuutura Pro Business enables organizations to:
Onboard users seamlessly through secure frictionless KYC and AML checks.
Monitor compliance in real time adapting instantly to regulatory updates.
Manage global risk exposure with analytics and insights across geographies.
Protect brand reputation by preventing fraud money laundering and illicit activity.
By providing a unified dashboard that integrates verification reporting and analytics Fuutura Pro Business eliminates the need for multiple vendors or fragmented compliance systems.
Unified Compliance: One Dashboard for All Risk Operations
Compliance management has historically been complex requiring multiple systems to track verification audit trails and reporting obligations. Fuutura Pro Business simplifies this process through its unified dashboard which consolidates every compliance task into a single intuitive interface.
Key features include:
End-to-End KYC/AML Verification: Verify users in real time with multi-layered checks powered by AI and global data sources. Fuutura Pro Business integrates with major verification databases to ensure accuracy and legitimacy across regions.
Dynamic Risk Scoring: The platform assigns risk levels to users wallets and transactions using behavioral analytics and machine learning enabling teams to detect anomalies before they escalate.
Regulatory Intelligence Engine: With built-in compliance frameworks for different jurisdictions Fuutura Pro Business helps enterprises stay ahead of evolving global regulations. Whether operating in the EU under MiCA or in Asia-Pacific with FATF guidelines businesses can remain audit-ready at all times.
Automated Reporting & Alerts: Generate regulatory reports audit summaries and suspicious activity alerts in seconds saving time while ensuring compliance accuracy.
This real time data-driven approach transforms compliance from a burden into a strategic advantage giving businesses the confidence to operate globally.
Empowering Enterprises to Grow Securely in the Web3 Era
Security and compliance go hand in hand. Fuutura Pro Business not only ensures that enterprises meet legal requirements but also strengthens overall ecosystem integrity. By embedding trust into every interaction, it enables businesses to attract and retain users in a space where transparency is paramount.
For financial institutions and exchanges Fuutura Pro Business simplifies crypto asset compliance from KYC onboarding to transaction monitoring and sanctions screening.
For DeFi and Web3 startups it offers developer-friendly APIs and SDKs that make compliance integration seamless enabling innovation without friction.
For enterprises and corporates it delivers the tools to manage digital identities prevent fraud and ensure operational transparency across blockchain environments.
The result? A secure scalable compliance layer that adapts as your business grows whether you’re managing 10 users or 10 million.
Global Risk Management: Seeing the Bigger Picture
In a world where transactions cross borders in milliseconds managing global risk requires visibility intelligence and adaptability. Fuutura Pro Business is designed to offer all three.
Through advanced analytics and predictive insights the platform maps potential risks across countries currencies and counterparties. Businesses can visualize exposure in real time identify high-risk zones and make informed decisions instantly.
By leveraging AI-driven monitoring Fuutura Pro Business detects suspicious behaviors from wallet mixing and layering to sanction evasion before they become compliance incidents. Its global intelligence network continuously updates based on evolving threats giving businesses a proactive defense mechanism.
This global risk management capability ensures that enterprises remain not only compliant but also resilient in an ever-changing regulatory landscape.
Why Fuutura Pro Business Stands Apart
While several compliance solutions exist Fuutura Pro Business differentiates itself through its Web3-native architecture and enterprise-grade reliability.
Here’s what makes it unique:
Built for Web3 Trusted by Enterprises — Unlike traditional systems adapted for blockchain Fuutura Pro Business was designed from the ground up for decentralized environments.
Real Time Not Retrospective — Continuous KYC and AML monitoring mean businesses stay compliant dynamically not reactively.
Global Regulatory Coverage — One system supports multiple jurisdictions and frameworks saving teams countless hours of research and adaptation.
Unified Intelligence Hub — All compliance verification and risk tools in a single platform.
Privacy-First Design — User data is handled under strict privacy protocols ensuring GDPR and data protection compliance worldwide.
These capabilities make Fuutura Pro Business more than just a compliance tool it’s a strategic infrastructure for enterprise Web3 adoption.
The Future of Enterprise Web3 Starts with Trust
As blockchain technology continues to redefine industries from finance and supply chains to healthcare and governance the demand for secure compliant and transparent systems grows stronger.
Enterprises cannot afford to treat compliance as an afterthought. Instead it must be woven into the fabric of innovation itself.
Fuutura Pro Business embodies that philosophy. By merging automation intelligence and regulatory insight it empowers businesses to operate confidently in the decentralized economy.
In a world where trust is the ultimate currency Fuutura Pro Business provides the framework to build scale and sustain it — for every business everywhere.
Conclusion
Web3 adoption is accelerating but so are its challenges. The enterprises that thrive in this new digital era will be those that balance innovation with integrity speed with security and growth with governance.
Fuutura Pro Business is more than a compliance solution — it’s a partner in progress.
From onboarding to monitoring from risk management to reputation protection Fuutura Pro Business provides the foundation for a safer smarter and more compliant Web3 future.
Because the future of business isn't just decentralized it's responsible. And Fuutura Pro Business is here to make that future possible.`,
    date: "Feb 13, 2026",
    readTime: "5 min read",
    category: "AltCoins",
    image: "/Images/sample-blog-3.jpg" // Sample image path
  },
  {
    id: 4,
    title: "Fuutura Wallet: Where Smart Meets Seamless in Crypto",
    description: `The cryptocurrency world is changing in a speed that has never been experienced before. With the continued use of digital assets globally users are seeking tools that are not just secure but also engaging smart and empowering. Fuutura Wallet is an innovation of the future a solution that will give its users the ultimate control over their crypto experience in a rapid and dynamic environment. Fuutura Wallet is a smarter approach to owning digital assets through integration of non-custodial ownership real-time market intelligence and a smooth multi-chain functionality.
Redefining Ownership with Non-Custodial Control
The main principle of fuutura Wallet is the ownership but the real ownership. In contrast to the custodial wallets and centralized exchanges with the users having their personal keys fuutura Wallet is non-custodial as well. The implication of this is that the user has full control of their money at any time.
In the case of fuutura Wallet the ownership of your keys is yours and yours alone. No third party can freeze your assets or limit access to your holdings or compromise them. Such freedom is congruent with the initial idea about blockchain technology: decentralization transparency and financial autonomy.
In a time where centralized custody has been exposed as a dangerous practice due to the occurrence of security breach and failed exchange non custodial wallets are no longer luxury  they are a necessity. Fuutura Wallet gives its users the freedom to feel secure that they are the only ones who have control over their digital wealth.
Seamless Design for Everyday Crypto Use
The crypto is not supposed to be complicated and the fuutura Wallet is a representation of this thought with its sleek easy-to-use design. The interface is easy to use and navigate regardless of being a newcomer in the crypto world or an advanced trader with several investments.
Navigation is simple necessary options are simple to find and the transactions can be made within few steps. Fuutura Wallet removes any redundant intricacies that divert users to what is important in the end and that is managing growing and knowing their assets.
This tonal experience connects between the high tech blockchain features and the features of a user-friendly every-day experience which makes fuutura Wallet appropriate both to the casual user and to power users.
Intelligent Market Insights with fuutura IQ
Fuutura IQ is one of the strongest capabilities of fuutura Wallet where real-time market updates and smart insights are delivered within the wallet. Timely information is important in a 24/7 market that is dynamic and constantly evolving in seconds.
Fuutura IQ assists the user to remain updated with current market information trends and insights without the user leaving the wallet. Users do not have to alternate between different platforms or use external tools since they can find the information that they need in a single centralized area.
Fuutura Wallet is changing passive asset storage into the active portfolio awareness by providing the wallet experience with intelligence. The users are in a better position to make informed decisions track the market trends and react to the changes effectively.
Fast and Secure Token Swaps
Cryptos can be managed by going straight to the swap as diversification utility or strategy. This is simplified by fuutura Wallet which allows instant token swaps across different blockchains.
Customers can easily share the tokens in the wallet with a few clicks without using third-party platforms or complicated actions. The swap process will be quick safe and transparent such that users can have complete control over the process.
Multi-blockchain participation is also not frictionated by fuutura Wallet because it supports cross-chain functionality. Users can easily be able to navigate various ecosystems without having to be concerned with the complicated conversions or technical obstacles.
Built for a Multi Chain Future
The blockchain ecosystem is ceased to be limited to one network. In the present day users are using a variety of chains protocols and decentralized applications. Here is fuutura Wallet which is constructed with this multi-chain reality in mind.
There is an option to support more than one blockchain to enable users to handle various assets using one wallet experience. Such coherence saves time makes it less complex and efficient in general. With the continuously growing crypto world fuutura Wallet is set to evolve alongside it and adjust to new chains and innovations.
Security Without Compromise
The security has been a priority of any crypto wallet and fuutura Wallet takes it with a user-first approach. Fuutura Wallet is secure in transactions and minimizes risk through a combination of non-custodial architecture and maximum control.
The end user will not have to rely on centralized agents and confidential information will not be owned by third parties. This strategy is consistent with the best practices of decentralized finance and proves the determination of the wallet to protect digital assets.
Empowering the Next Generation of Crypto Users
Fuutura Wallet is not merely a tool but an ecosystem that would empower the users throughout their crypto life. Whether you are just starting to practice basic principles of a self-custody or have been using the fuutura Wallet for some time and already have sophisticated portfolios on your hands the platform offers the flexibility and smartness required to navigate the digital economy with confidence.
Fuutura Wallet can reduce the entry barrier and at the same time provide strong functionality to people who require it by combining simplicity with high level functionality. It is a move towards decentralizing and democratizing crypto and making it more user-friendly.
The Smarter Way to Manage Crypto
With the future expansion of the crypto space the need to have smarter safer and more seamless solutions is bound to be even more important. The fuutura Wallet is an amalgamation of innovation and usability and it provides a platform upon which control intelligence and convenience are simultaneous.
Fuutura Wallet provides a full package of contemporary crypto users due to non-custodial ownership real-time insights via fuutura IQ instant token swaps and multi-chain support.
Cryptos belong to those who own their own assets and fuutura Wallet is here to make that process even smarter easier and safer.
`,
    date: "Feb 13, 2026",
    readTime: "7 min read",
    category: "Defi",
    image: "/Images/sample-blog-4.jpg" // Sample image path
  },
  {
    id: 5,
    title: "Global Compliance Local Control: How Fuutura Pro Business Simplifies Worldwide Regulations",
    description: `Since businesses grow across borders there is increased complexity and demands in regulatory compliance. Various nations have various laws standards and frameworks of operation- each having its rules penalties and expectations. The resulting manual control or the fragmented systems of managing these requirements risks are rising and the growth is slow.
Fuutura Pro Business is created to address this issue by providing global compliance and local control- assisting organizations to comply with GDPR, CCPA, KYC, AML, and FATF regulations in 155+ countries through only one dashboard.
Why Is Global Compliance So Important for Modern Businesses?
Global compliance has ceased being a choice. Any company that has international operations- or deals with international customers data is under legal obligation to abide by regional and international standards.
Failure to meet these requirements can lead to:
Heavy regulatory fines
Legal action and operational shutdowns
Loss of customer trust and brand reputation
Restrictions on market expansion
Governments have stepped up and levied stiffer and stiffer fines which has seen compliance management being proactive become a mandatory business operation and a legal consideration.
What Makes Compliance Across Multiple Countries So Challenging?
Every nation has its regulatory structure enforcement levels and compliance anticipations. Businesses must deal with:
Data protection laws such as GDPR, CCPA, LGPD, and PDPA
Financial crime prevention rules including KYC and AML
FATF recommendations interpreted differently by local regulators
Continuous regulatory updates and audits
This is complicated to manage in different regions and may end up in duplication of efforts at increased costs and gaps in compliance.
How Does Fuutura Pro Business Solve Global Compliance Complexity?
Fuutura Pro Business is easy to comply as it has a single platform that assists in complying with regulations in 155+ countries. Businesses do not have to work with a variety of tools and vendors since they can receive a single dashboard with which to consolidate the compliance operations.
This centralized approach provides:
Real-time visibility across all regions
Consistent compliance standards
Faster reporting and audits
Reduced operational complexity
How Does Fuutura Pro Business Help with GDPR and Data Privacy Laws?
One of the most compliance areas that are observed now is data privacy regulations. Fuutura Pro Business assists companies in meeting the requirements of the GDPR along with other privacy regulations by integrating data protection into the day-to-day processes.
Key benefits include:
Centralized data processing oversight
Consent and privacy preference management
Data retention and minimization controls
Efficient handling of data access and deletion requests
It is going to help organizations to secure the personal information and at the same time ensure compliance without interfering with the customer experience.
How Are KYC and AML Requirements Managed Across Borders?
Know Your Customer (KYC) or Anti-Money Laundering (AML) is an important regulation in the operations of financial institutions fintech and international businesses. Nonetheless these controls are frequently cumbersome and unfaithful to be put into effect in various jurisdictions.
Fuutura Pro Business standardizes the workflow of KYC and AML but can be customized regionally. Businesses can:
Verify customer identities efficiently
Assess and monitor risk levels
Maintain audit-ready documentation
Align with international AML regulations
This leads to a quicker onboarding process minimized fraud risk and a global regulatory compliance standard.
How Does Fuutura Pro Business Align with FATF Standards?
The financial action task force (FATF) offers universal principles to prevent money laundering and terrorist financing. Although the standards of the FATF are international the application of these standards differs across the countries.
Fuutura Pro Business is a translation of the FATF principles into local regulatory environments in compliance controls. This will enable businesses to pursue the best practices of the world and satisfy country requirements- a necessary strike in doing business internationally.
What Does “Local Control” Mean in Global Compliance?
Local control implies that regional teams are allowed to handle compliance in accordance with local laws languages and realities in operations without the central control.
With Fuutura Pro Business:
Local teams can adapt compliance settings to regional regulations
Headquarters maintain real-time visibility across all markets
Decision-makers gain unified reporting and risk insights
This model facilitates good governance and flexibility at local level.
Can Fuutura Pro Business Scale as Businesses Grow?
Yes. Fuutura Pro Business is scalable. Whether the company is decided to enter new markets introduce new products or increase its customers base the platform is flexible and does not need significant changes in the system.
Updates are automated and compliance rules can be configured to ensure that businesses are updated to keep with the changing regulations. This scalability enables compliance to ensure that it does not limit growth.
How Does Fuutura Pro Business Reduce Compliance Costs?
Manual process outside consultants and siloed systems are common features of traditional compliance. Fuutura Pro Business saves expensive through standardizing compliance functions within one automated system.
Benefits include:
Lower administrative and legal expenses
Reduced duplication of compliance efforts
Faster audits and regulatory reporting
Improved operational efficiency
Automation reduces the human factor and liberates the teams to concentrate on the strategic areas.
How Does Compliance Build Trust with Customers and Partners?
One of the competitive advantages in the current digital economy is trust. Customers are demanding responsible handling of data and partners are asking to be regulated.
Through the same compliance being observed in all the regions Fuutura Pro Business assists organizations to show transparency accountability and ethical conducts. This enhances the trust of the regulators customers and even international partners.
What Is the Future of Compliance Management?
The regulations will keep on changing with the growth in technology and the world threats. The companies that have used the old-fashioned compliance systems will not be able to keep pace.
Fuutura Pro Business is the new face of compliance management centralised and intelligent as well as globally adaptable. It makes compliance a strategic asset and not a liability.
How Can Businesses Stay Compliant Everywhere Without the Hassle?
Fuutura Pro Business provides management of global compliance. Organizations can meet the requirements of GDPR, CCPA, KYC, AML and FATF requirements in 155+ countries- all in the same platform.
Through its global coverage plus local control Fuutura Pro Business allows companies to mitigate risk streamline operations and grow; anywhere in the world.
`,
    date: "Feb 13, 2026",
    readTime: "6 min read",
    category: "Technology",
    image: "/Images/sample-blog-5.jpg" // Sample image path
  },
  {
    id: 6,
    title: "Fuutura ID – Your Web3 Identity Your Control",
    description: `With the changing of the digital world identity is one of the most prized possessions in the virtual world. In the Web3 where decentralization ownership and privacy are the principles identity security and identity efficiency must be considered as essential as ever. Here is where Fuutura ID comes in - a smarter user-controlled method of checking controlling and distributing your digital identity throughout the Web3 system.
However what is the specific difference between Fuutura ID and why it is significant to the future of Web3? Let's explore.
Why Is Digital Identity a Challenge in Web3?
Web3 is supposed to be free decentralized owned but identity management usually has fallen behind. Customers are often required to fill in Know Your Customer (KYC) procedures many times on various platforms. This results in:
Wasted time and duplicated effort
Increased exposure of sensitive personal data
Fragmented identity systems with little user control
The traditional identity systems are centralized whereby users have to entrust third parties to store and manage their data. Web3 consumers on the contrary desire privacy independence and openness.
Fuutura ID was created to address these issues because it returned identity ownership to the users.
What Is Fuutura ID and How Does It Work?
Fuutura ID is a decentralized Web3 identity solution which enables users to verify their identity once and use it in a variety of platforms. Rather than filling in papers over and over again the users fill in one KYC that is also reusable as a digital identity.
The identity is then safely stored on-chain making it immutable transparent and resistant to being tampered with. It is then possible to attach this on-chain identity to wallets decentralized applications (dApps) and more Web3 services.
Fuutura ID in crude words is a Web3 passport.
How Does Fuutura ID Simplify KYC Verification?
KYC is perceived as an obligatory yet annoying procedure. Fuutura ID makes it an expedited and easy process.
With Fuutura ID users can:
Complete KYC in just a few simple steps
Avoid repeating verification on every new platform
Maintain compliance without sacrificing convenience
After verification your Fuutura ID is immediately recognised by compatible Web3. This will provide a less formal onboarding experience and yet satisfies regulatory compliance.
The result? Less friction more freedom.
What Makes Fuutura ID Secure and Trustworthy?
Fuutura ID provides security. Fuutura ID uses blockchain technology to secure user data unlike centralized databases which can easily be hacked and breached.
Key security benefits include:
On-chain storage for transparency and immutability
User-controlled access to personal information
Reduced reliance on centralized intermediaries
A company does not own your identity but you do. Fuutura ID guarantees that your data cannot be accessed or edited by any one without your consent.
How Does Fuutura ID Give Users Full Control Over Their Data?
Fuutura ID concentration on data ownership and control is one of the strongest capabilities. Users determine the way when and with whom to share their identity information.
Through the Identity Hub users can:
View and manage their verified identity
Update personal details when needed
Monitor how their identity is being used
Such control corresponds exactly with the philosophy of Web3 self-soverign identity.
What Is the Identity Hub and Why Is It Important?
The Identity Hub is your main dashboard in the management of your Fuutura ID. Rather than using different platforms all this is managed under a user-friendly interface.
The Identity Hub allows users to:
Manage verified credentials
Update identity information securely
Maintain compliance over time
This allows Fuutura ID to be more than a verification tool and a full identity management system of the decentralized web.
How Does the Sharing Console Enable One-Click Identity Sharing?
There is no need to be complex and risky when sharing identity information. The Sharing Console by Fuutura ID allows it to be easy and safe.
With one click users can:
Share verified identity data with trusted platforms
Control exactly what information is shared
Revoke access at any time
Such selective disclosure would guarantee privacy and still allow smooth interaction between Web3-services. You tell me it only as much as is required.
How Can Fuutura ID Be Used Across Web3 Platforms?
Fuutura ID is developed to be interoperative and flexible. It may be applied to a large variety of Web3 applications such as:
Crypto wallets
DeFi platforms
NFT marketplaces
dApps and DAOs
Web3 gaming ecosystems
Fuutura ID can serve to make the Web3 environment more connected and efficient by becoming a reusable identity layer.
Why Is Fuutura ID a Game-Changer for Web3 Adoption?
The widespread use of Web3 is based on the ease of delivering the experience its safety and the ease of use. Fuutura ID eliminates one of the greatest obstacles complicated verifications of identity.
Benefits for the ecosystem include:
Faster onboarding for new users
Reduced operational costs for platforms
Improved trust and compliance
Stronger privacy protections
The identity is a facet that becomes accessible and safe therefore more individuals will consider Web3.
What Does the Future Hold for Fuutura ID?
Identity solutions such as Fuutura ID will be extremely important in the future of Web3 as it continues to expand. Trusted identity is necessary in the world of decentralized finance to digital governance.
Fuutura ID represents a future where:
Users own their digital identity
Platforms respect privacy by design
Verification is seamless and reusable
This is not an upgrade but a complete change in the working dynamics of identity in the online world.
Final Thoughts
Fuutura ID is not just a KYC solution. It is a self sovereign identity structure that is constructed during the middle of the decentralized era. Having on-chain security user control and share-sharing all combined Fuutura ID allows people to make their way to Web3 with self-confidence.
Fuutura ID will keep in one place the power that is data and keep it right there with you.
`,
    date: "Feb 13, 2026",
    readTime: "4 min read",
    category: "News",
    image: "/Images/sample-blog-6.jpg" // Sample image path
  },
  {
    id: 7,
    title: "Fuutura Ecosystem: Powering a Secure, Compliant, and Scalable Web3 Future",
    description: `Web3 is at a pivotal point of concern. The experiment that was initially decentralized has turned into a rapidly expanding digital economy- in the finance gaming identity and many other areas. However with the increased rate of adoption the same principles that have facilitated the power of Web3 openness anonymity and global accessibility become significant problems. Fraud inconsistent compliance policies and procedures and tedious onboarding remain a source of stunted growth and confidence.
Enter Fuutura Ecosystem a single framework that is able to counter these pain points. Fuutura provides a complete vision of trust and compliance in the decentralized world with identity verification Fuutura KYC compliance management Fuutura Pro Business and secure user identity and asset control Fuutura Wallet.
One ecosystem. One standard. Constructed to be trusted transparent and efficient.
The Web3 Dilemma: Scale Meets Risk
The boom of web3 has been thrilling and hectic. Billions of transactions are now run on decentralized platforms however there comes complexity with it. The existence of fraudulent identity uncertainty in regulation and ineffective onboarding systems hinder entry of businesses as well as users.
Identity Fraud: Because blockchain is pseudonymous it's hard to tell the difference between real users and bad actors. People who commit fraud use anonymity to clean up money run scams or change systems.
Compliance Gaps: Because each region has its own rules like KYC (Know Your Customer) AML (Anti-Money Laundering) and GDPR projects often have a hard time following the rules around the world.
Onboarding Challenges: A lot of people have to go through slow broken verification processes that make them less likely to participate. At the same time businesses have to deal with multiple vendors for KYC compliance tracking and wallet management.


What happened? A broken experience that makes people less likely to trust it and slows down adoption.
Security and compliance must become fundamental not optional to create a truly scalable and sustainable Web3 ecosystem.
Fuutura Ecosystem: Redefining Trust and Compliance in Web3
Fuutura was founded on the idea of having a single mission to unite the most efficient Web3 innovation and the standards of the world-wide compliance regulations. When verification compliance and identity management are unified under a single umbrella Fuutura gives its users and businesses the ability to conduct their business activities in the growing and more complicated digital environment with confidence.
1. Fuutura KYC: Fast Global Verification
Verified identity is the core of every credible digital ecosystem. The Fuutura KYC allows users all over the world to verify themselves instantly and securely without violating the principle of privacy and decentralization.
Global Coverage: Fuutura KYC lets you verify your identity in different parts of the world making sure you follow international standards while still being able to adapt to local needs.
Frictionless User Experience: Fuutura KYC makes the onboarding process easier and increases conversion rates by streamlining the verification process. Users can verify their identity once and then use many platforms without any problems.
Privacy by Design: Fuutura protects personal information with advanced encryption and decentralised storage solutions unlike traditional systems that store sensitive user data in one place.


This translates to quicker user on boarding less compliance costs to the business, and greater protection against fraud to all.
2. Fuutura Pro Business: Compliance and Risk Management in One Dashboard
One of the biggest operations challenges in Web3 is to manage compliance with multiple jurisdictions and partners. Fuutura Pro Business offers a single source of truth--it offers a single compliance and risk management solution to organizations.
Comprehensive Compliance Suite: Fuutura Pro Business has an easy-to-use dashboard that combines KYC/AML checks risk scoring and regulatory reporting.
Real-Time Monitoring: Businesses can see transactions user activity and risk patterns which helps them find suspicious behaviour and stay ahead of their legal obligations.
Scalable Integration: Fuutura APIs make it easy for decentralised apps (dApps) exchanges and fintech companies to add compliance workflows right into their platforms.
Compliance with Fuutura Pro Business becomes a strategy--not a liability. Teams are capable of orienting towards growth and at the same time earn the trust of both regulators and the users.
3. Fuutura Wallet: Empowering Users to Own Their Identity and Assets
Decentralization does not only mean that it concerns financial sovereignty but also ownership of identity. Fuutura Wallet is the extension of the ecosystem of Fuutura to the users: it is an identity-related and secure system that allows managing both digital assets and identity credentials.
Secure Asset Management: Fuutura Wallet has advanced security protocols and fraud prevention mechanisms so users can store send and receive tokens with confidence.
Self-Sovereign Identity (SSI): Fuutura Wallet has advanced security protocols and fraud prevention mechanisms so users can store send and receive tokens with confidence.
Seamless Ecosystem Integration: Fuutura Wallet connects directly to Fuutura KYC and Fuutura Pro Business so verified identities can use compliant services right away. This makes for a truly interoperable Web3 experience.
The outcome is a user controlled ecosystem and the business can have the confidence that it is dealing with certified compliant players.
Why It Matters: Building a Safer Smarter Web3
The vision of Fuutura can be described as quite straightforward but transformative: make it grow without losing trust. Fuutura has brought sanity transparency and efficiency in an industry that is perceived to be the Wild West.
Here's why this matters for the future of Web3:
Reducing Fraud: Verified digital identities make it much less likely that scams fake accounts and money laundering will happen.
Streamlining Onboarding: Users can join platforms in minutes instead of days because verification and single sign-on are faster.
Ensuring Global Compliance: Businesses can grow around the world without worrying about making mistakes with regulations thanks to a unified compliance layer.
Empowering Users: Fuutura fits perfectly with Web3's ideas of decentralization and self-sovereignty because it lets people own their own identity.
Accelerating Adoption: When trust and efficiency come together everyone wins: users developers and regulators. This is what drives the next wave of Web3 innovation.
A Unified Future: Trust as the New Standard
Web2 concentrated the trust i.e. users needed to rely on corporations to handle their identities and data. In Web3 there has to be decentralized but verifiable trust. Fuutura fills such a void by creating a new standard of how identity and compliance ought to be in a global digital economy.
Imagine a world where:
A person in Singapore can check once and then use decentralized finance (DeFi) apps gaming sites and NFT marketplaces from other countries.
A new business in Europe doesn't have to build a compliance department from scratch to follow AML and KYC rules.
A transparent safe and efficient ecosystem can support a global community of users businesses and regulators.
That's the world Fuutura wants to create: one where trust grows as quickly as technology.
Conclusion
Web3 revolution is not merely about decentralization but rather developing systems that are open but safe worldwide yet lawful0 quick yet reliable. Fuutura Ecosystem reflects such a balance through offering a full set of offerings aimed at decreasing fraud streamlining onboarding and guarantee compliance on an international scale.
Fuutura KYC to Fuutura Pro Business or Fuutura Wallet to Fuutura Wallet: fast verification or unified compliance management Fuutura KYC to Fuutura Pro Business Fuutura Wallet to Fuutura Wallet: the foundation of the next generation of digital trust Fuutura provides.
Get Fuutura Learn how it enables secure compliant and scalable Web3 ecosystems. In the digital innovation future trust is not an option but rather the basis.`,
    date: "Feb 13, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: "/Images/sample-blog-7.jpg" // Sample image path
  }
];

const categories = ["All", "Defi", "AltCoins", "Technology", "Trading", "News"];

function Blogs() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Truncate description to show only first 120 characters
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const handleBlogClick = (blogId) => {
    router.push(`/blogs/${blogId}`);
  };

  // Filter blogs based on category and search
  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full bg-black py-16 px-6 lg:px-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Articles Tag */}
          {/* <div className="inline-block mb-6">
            <div className="px-4 py-2 rounded-lg border border-[#3A7BFF] bg-[#3A7BFF]/10 backdrop-blur-sm">
              <span className="font-futura text-sm font-medium text-white">
                Articles
              </span>
            </div>
          </div> */}
          <img src="/Images/Tab.png" alt="" className="mx-auto mb-6" />
          {/* Main Title */}
          <h1 className="font-futura text-5xl md:text-6xl font-bold text-white mb-4">
            Top Stories
          </h1>

          {/* Subtitle */}
          <p className="font-futura text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A collection of hand-picked articles for you to deep dive, insights and honest advice to navigate the crypto world.
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center gap-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-[#101012] border border-white/10 text-white placeholder-white/50 font-futura focus:outline-none focus:border-[#3A7BFF]/50 transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-futura text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-[#101012] border border-white/10 text-white "
                    : "text-white/70 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlogClick(blog.id)}
              className="group bg-gray-800/50 rounded-xl border border-white/10 overflow-hidden hover:border-[#3A7BFF]/50 transition-all duration-300 cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative w-full h-60 bg-gray-700 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='20' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EBlog Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-futura text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#3A7BFF] transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-white/40 mb-4 leading-relaxed">
                  {truncateDescription(blog.description)}
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-white/60 font-futura text-xs">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no blogs found */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="font-futura text-lg text-white/70">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blogs;

