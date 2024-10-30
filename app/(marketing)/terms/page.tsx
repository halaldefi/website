import Image from "next/image";
import Link from "next/link";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FaqAccordion from "@/components/sections/faq-accordion";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "Halal DeFi Terms of Use - Ethical Investment Platform Policies",
  description:
    "Read the Terms of Use for Halal DeFi, detailing our commitment to Shariah-compliant investing, user rights, platform policies, and transparent crypto asset management. Understand your rights and responsibilities on Halal.io.",
  keywords: ["Halal DeFi Terms of Use", "platform policies", "Shariah-compliant investing", "ethical crypto terms", "user rights", "Halal.io policies", "transparent blockchain investment"]
});

export default async function TermsOfUse() {
  return (
    <div>
      <section className="relative space-y-6 overflow-hidden py-12 sm:py-36 lg:py-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/_static/landing/Vector.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at top center, rgba(255, 199, 114, 0.1) 0%, rgba(255, 199, 114, 0.2) 5%, rgba(255, 255, 255, 0) 50%)",
            transform: "scale(1.5)",
          }}
        ></div>
        <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 text-center">
          <h1 className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
            Terms Of Use
          </h1>
        </div>
      </section>
      <div className="my-5">
        <MaxWidthWrapper>
          <div className="text-xl font-semibold">
            1. Introduction and General Provisions
          </div>
          <div className="text-md px-5 pt-5 font-semibold">1.1 Overview</div>
          <div className="px-5 pt-2 text-sm">
            Halal.io (“we,” “us,” or “our”) operates a Shariah-compliant
            decentralized finance (DeFi) platform designed to facilitate
            investments in ethical Web3 and blockchain projects. By leveraging
            blockchain technology, Halal.io provides users with the opportunity
            to participate in a variety of financial transactions in a manner
            consistent with Islamic principles. These Terms of Use (&quot;Terms&quot;)
            govern your access to and use of the Halal.io platform, which
            includes interactions with smart contracts, token transactions, and
            other services offered through our website and associated tools.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            1.2 Acceptance of Terms
          </div>
          <div className="px-5 pt-2 text-sm">
            Your access to and use of Halal.io is conditioned upon your
            acceptance of and compliance with these Terms. By accessing or using
            any part of the Halal.io platform, you acknowledge that you have
            read, understood, and agree to be bound by these Terms, along with
            our Privacy Policy and any other legal conditions provided by
            Halal.io. If you do not agree to these Terms, you must immediately
            discontinue your use of the platform. Your continued use of the
            platform signifies your acceptance of any updated or revised Terms.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">1.3 Amendments</div>
          <div className="px-5 pt-2 text-sm">
            Halal.io reserves the right, at its sole discretion, to amend or
            modify these Terms at any time, with or without notice. Such
            amendments will become effective immediately upon their posting on
            the platform or at the time they are communicated to you via email
            or other means. It is your responsibility to review these Terms
            periodically to ensure that you are aware of any changes. Your
            continued use of the platform following the posting of any changes
            constitutes your acceptance of those changes.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">1.4 Eligibility</div>
          <div className="px-5 pt-2 text-sm">
            To use the Halal.io platform, you must meet the following criteria:
            Age Requirement: You must be at least 18 years old or the legal age
            in your jurisdiction to form a binding contract. Legal Capacity: You
            must have the legal authority to enter into and comply with these
            Terms. Jurisdictional Restrictions: You must not be a citizen or
            resident of any country or jurisdiction where the use of DeFi
            services, blockchain technology, or cryptocurrencies is prohibited
            or restricted by law, or where such activities are subject to
            sanctions or regulations that could impact Halal.io’s ability to
            provide its services.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            1.5 Compliance with Laws
          </div>
          <div className="px-5 pt-2 text-sm">
            You agree to comply with all applicable local, national, and
            international laws, statutes, ordinances, and regulations in your
            use of the Halal.io platform. This includes, but is not limited to,
            compliance with anti-money laundering (AML) laws, counter-terrorism
            financing (CTF) regulations, and any other financial or digital
            asset regulations relevant to your jurisdiction. You understand that
            it is your responsibility to determine the legal requirements of
            your specific jurisdiction and to adhere to them when using
            Halal.io.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            1.6 Relationship Between Parties
          </div>
          <div className="px-5 pt-2 text-sm">
            These Terms do not create any partnership, joint venture, agency, or
            employment relationship between you and Halal.io. You acknowledge
            that you are using the platform in your individual capacity and not
            on behalf of any entity, unless you are an authorized representative
            of that entity, in which case you represent and warrant that you
            have the authority to bind that entity to these Terms.
          </div>
          <div className="mt-10 text-xl font-semibold">
            2. Use of the Platform
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            2.1 License and Access
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io grants you a limited, non-exclusive, non-transferable,
            revocable license to access and use the platform for lawful purposes
            in accordance with these Terms. This license is subject to your
            compliance with these Terms and does not grant you any rights to
            modify, reproduce, distribute, create derivative works from,
            publicly display, publicly perform, sublicense, or otherwise exploit
            the platform or its content, except as expressly authorized herein.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            2.2 Non-Custodial Service
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io operates on a non-custodial basis, meaning that while the
            platform facilitates transactions, trades, and investments, it does
            not hold, manage, or control user assets directly. You acknowledge
            and agree that you are solely responsible for the management of your
            private keys, digital wallets, and any assets associated with your
            account. Halal.io does not have access to your private keys and
            cannot assist in the recovery of lost or stolen assets. The security
            and protection of your private keys and wallets are entirely your
            responsibility.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            2.3 Token Transactions
          </div>
          <div className="px-5 pt-2 text-sm">
            All transactions involving the $HDF token, including buying,
            selling, or trading on decentralized exchanges, are executed through
            smart contracts. These smart contracts are deployed on a blockchain
            and are designed to be self-executing based on the predefined
            conditions coded within them. Halal.io does not control or alter
            these smart contracts once they are deployed, and users understand
            that the outcome of transactions is determined solely by the smart
            contract code. You accept that blockchain transactions are final and
            irreversible, and you agree to bear all risks associated with the
            use of such smart contracts.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            2.4 User Responsibilities
          </div>
          <div className="px-5 pt-2 text-sm">
            As a user of the Halal.io platform, you agree to:
            <li className="mt-2">
              {" "}
              Conduct Transactions with Caution: Ensure that all transactions
              are conducted with full understanding and acceptance of the risks
              associated with DeFi and cryptocurrency investments. This includes
              the potential for significant market volatility, liquidity issues,
              and complete loss of invested capital.
            </li>
            <li className="mt-2">
              {" "}
              Safeguard Your Private Keys: Implement appropriate security
              measures to protect your private keys, digital wallets, and any
              other sensitive information related to your use of the platform.
            </li>
            <li className="mt-2">
              {" "}
              Comply with Legal Requirements: Adhere to all applicable local and
              international laws, including tax obligations and regulatory
              requirements relevant to cryptocurrency transactions and
              investments.
            </li>
            <li className="mt-2">
              {" "}
              Use the Platform Ethically: Engage with the platform in a manner
              consistent with Islamic ethical guidelines and the technical
              requirements outlined in these Terms
            </li>
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            2.5 Investment Risks
          </div>
          <div className="px-5 pt-2 text-sm">
            Investing in cryptocurrencies and DeFi projects through Halal.io
            involves substantial risks, including, but not limited to, market
            volatility, liquidity risks, smart contract vulnerabilities, and the
            potential for total loss of invested funds. You acknowledge that the
            value of $HDF tokens and other digital assets can fluctuate
            significantly, and there is no guarantee of profit or positive
            return on investment. Halal.io does not provide financial, legal, or
            tax advice, and you are strongly encouraged to consult with
            qualified professionals before making any investment decisions.
          </div>
          <div className="mt-10 text-xl font-semibold">3. Account Security</div>
          <div className="text-md px-5 pt-5 font-semibold">
            3.1 Account Creation and Maintenance
          </div>
          <div className="px-5 pt-2 text-sm">
            To access certain features of the Halal.io platform, you may be
            required to create an account. During the registration process, you
            agree to provide accurate, current, and complete information. It is
            your responsibility to maintain and promptly update this information
            to ensure its accuracy. Halal.io reserves the right to suspend or
            terminate your account if any information provided is inaccurate,
            incomplete, or misleading.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            3.2 Security of Account Credentials
          </div>
          <div className="px-5 pt-2 text-sm">
            You are responsible for maintaining the confidentiality of your
            account credentials, including your password and private keys. You
            agree not to share your credentials with any third party and to take
            all necessary precautions to prevent unauthorized access to your
            account. Halal.io shall not be liable for any loss or damage arising
            from your failure to secure your account information.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            3.3 Reporting Unauthorized Access
          </div>
          <div className="px-5 pt-2 text-sm">
            If you suspect any unauthorized use of your account or any other
            security breach, you must immediately notify Halal.io. You agree to
            cooperate fully with any investigation and to take any corrective
            actions required by Halal.io in response to such breaches. Failure
            to report unauthorized access or security breaches in a timely
            manner may result in the termination of your account and legal
            action against you.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            3.4 Account Suspension and Termination
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io reserves the right, at its sole discretion, to suspend or
            terminate your account and access to the platform at any time, with
            or without cause, and with or without notice. Reasons for suspension
            or termination may include, but are not limited to, violation of
            these Terms, suspicion of fraudulent or illegal activity, or failure
            to comply with security protocols. Upon termination, your right to
            use the platform will cease immediately, and Halal.io will have no
            obligation to retain or provide access to any data or information
            related to your account.
          </div>
          <div className="mt-10 text-xl font-semibold">
            4. Prohibited Activities
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            4.1 General Prohibitions
          </div>
          <div className="px-5 pt-2 text-sm">
            You agree not to use the Halal.io platform for any unlawful or
            prohibited activities, including but not limited to:
            <li className="mt-2">
              {" "}
              Violation of Shariah Principles: Engaging in activities that are
              contrary to Islamic ethical guidelines, such as gambling, usury,
              or trading in prohibited (haram) assets.
            </li>
            <li className="mt-2">
              {" "}
              Fraudulent Activities: Using the platform to engage in fraudulent
              activities, market manipulation, or other deceptive practices.
            </li>
            <li className="mt-2">
              {" "}
              Unauthorized Access: Attempting to gain unauthorized access to
              Halal.io’s systems, data, or any user accounts, or engaging in
              activities that disrupt or interfere with the platform’s
              operations.
            </li>
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            4.2 Prohibited Use of the Platform
          </div>
          <div className="px-5 pt-2 text-sm">
            You further agree not to:
            <li className="mt-2">
              {" "}
              Disseminate Harmful Content: Upload, post, transmit, or otherwise
              make available any content that is unlawful, harassing,
              defamatory, abusive, threatening, harmful, vulgar, obscene, or
              otherwise objectionable.
            </li>
            <li className="mt-2">
              {" "}
              Infringe on Rights: Violate the rights of others, including
              intellectual property rights, privacy rights, and rights of
              publicity.
            </li>
            <li className="mt-2">
              {" "}
              Interfere with the Platform: Engage in any activity that
              interferes with or disrupts the platform or the servers and
              networks used to provide the platform, including the use of bots,
              scripts, or other automated processes to access or interact with
              the platform.
            </li>
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            4.3 Consequences of Prohibited Activities
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io reserves the right to take appropriate action against users
            who engage in prohibited activities, including but not limited to
            suspending or terminating accounts, reporting illegal activities to
            law enforcement authorities, and pursuing legal action. Engaging in
            prohibited activities may also result in the forfeiture of any
            rights or privileges associated with your account.
          </div>
          <div className="mt-10 text-xl font-semibold">
            5. Privacy and Data Handling
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            5.1 Data Collection
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io is committed to protecting your privacy and ensuring the
            security of your personal information. We collect minimal data
            necessary to operate the platform, such as your email address and
            any information voluntarily provided during account creation or
            platform interactions. We do not collect personally identifiable
            information (PII) without your explicit consent.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            5.2 Use of Collected Data
          </div>
          <div className="px-5 pt-2 text-sm">
            The information we collect is used to enhance your experience on the
            platform, ensure compliance with legal obligations, and improve our
            services. Halal.io does not sell or share your data with third
            parties except where required by law or necessary to protect the
            integrity of our services. Any data sharing with third-party
            providers is conducted under strict confidentiality agreements,
            ensuring that your information is handled with the utmost care.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            5.3 Cookies and Tracking Technologies
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io may use cookies and similar tracking technologies to
            improve user experience, analyze platform usage, and personalize
            content. Cookies are small data files that are placed on your device
            when you visit our website. You can manage your cookie preferences
            through your browser settings, although disabling cookies may affect
            your ability to use certain features of the platform.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            5.4 Data Security
          </div>
          <div className="px-5 pt-2 text-sm">
            We implement advanced security measures to protect your data from
            unauthorized access, alteration, or destruction. These measures
            include encryption, secure access protocols, and regular security
            audits. However, no system is entirely foolproof, and Halal.io
            cannot guarantee the absolute security of your data. You are
            encouraged to take personal measures to safeguard your accounts and
            information.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">5.5 User Rights</div>
          <div className="px-5 pt-2 text-sm">
            You have the right to access, correct, or delete your personal
            information stored by Halal.io. If you wish to exercise these
            rights, please contact our support team. We will respond to your
            request in compliance with applicable data protection laws.
            Additionally, you have the right to withdraw consent for data
            processing at any time, though this may limit your ability to use
            certain features of the platform.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">5.5 User Rights</div>
          <div className="px-5 pt-2 text-sm">
            You have the right to access, correct, or delete your personal
            information stored by Halal.io. If you wish to exercise these
            rights, please contact our support team. We will respond to your
            request in compliance with applicable data protection laws.
            Additionally, you have the right to withdraw consent for data
            processing at any time, though this may limit your ability to use
            certain features of the platform.
          </div>
          <div className="mt-10 text-xl font-semibold">
            6. Intellectual Property
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            6.1 Platform Content
          </div>
          <div className="px-5 pt-2 text-sm">
            All content provided on the Halal.io platform, including text,
            graphics, logos, images, and software, is the intellectual property
            of Halal.io or its licensors and is protected by copyright,
            trademark, and other intellectual property laws. Unauthorized use,
            reproduction, distribution, or modification of any content is
            strictly prohibited. You are granted a limited license to access and
            use the platform for personal and non-commercial purposes, provided
            you comply with these Terms.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            6.2 User-Generated Content
          </div>
          <div className="px-5 pt-2 text-sm">
            If you submit any content, such as comments, feedback, or
            suggestions, to Halal.io, you grant us a non-exclusive,
            royalty-free, perpetual, and worldwide license to use, reproduce,
            modify, and distribute such content. You retain ownership of your
            content but agree that Halal.io may use it to improve our services
            or for other purposes consistent with our mission.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">6.3 Trademarks</div>
          <div className="px-5 pt-2 text-sm">
            Halal.io, the Halal.io logo, and any other trademarks or service
            marks used on the platform are the property of Halal.io or its
            licensors. You may not use any trademarks or service marks without
            the prior written consent of Halal.io, except as permitted by
            applicable law.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            6.4 Third-Party Content
          </div>
          <div className="px-5 pt-2 text-sm">
            The platform may include content provided by third parties, such as
            articles, data, or other information. All such content is the
            property of the respective owners and is protected by intellectual
            property laws. Halal.io is not responsible for the accuracy,
            completeness, or legality of third-party content, and your use of
            such content is at your own risk.
          </div>
          <div className="mt-10 text-xl font-semibold">
            7. Limitations of Liability
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            7.1 General Limitation
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io is provided &quot;as is&quot; without warranties of any kind, either
            express or implied. This includes but is not limited to implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement. Halal.io does not guarantee that the platform will
            be available without interruption or that it will be free from
            errors, bugs, or security breaches. You agree that your use of
            Halal.io is at your own risk.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            7.2 Limitation of Liability
          </div>
          <div className="px-5 pt-2 text-sm">
            To the maximum extent permitted by law, Halal.io’s liability to you
            for any damages arising from or related to your use of the platform,
            whether in contract, tort, or otherwise, shall not exceed the amount
            you have paid to Halal.io for access to the platform. In
            jurisdictions where limitations of liability for incidental or
            consequential damages are not allowed, Halal.io’s liability shall be
            limited to the extent permitted by law.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            7.3 Exclusion of Certain Damages
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your access to or use of, or inability to access or
            use, the platform, even if Halal.io has been advised of the
            possibility of such damages.
          </div>
          <div className="mt-10 text-xl font-semibold">8. Indemnification</div>
          <div className="text-md px-5 pt-5 font-semibold">
            8.1 General Indemnification
          </div>
          <div className="px-5 pt-2 text-sm">
            You agree to indemnify, defend, and hold harmless Halal.io, its
            affiliates, officers, directors, employees, and agents from and
            against any claims, liabilities, damages, losses, and expenses,
            including reasonable legal fees, arising out of or in any way
            connected with your access to or use of the platform, your violation
            of these Terms, or your violation of any rights of another person or
            entity.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            8.2 Defense of Claims
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io reserves the right, at its own expense, to assume the
            exclusive defense and control of any matter subject to
            indemnification by you, in which case you agree to cooperate fully
            with Halal.io in asserting any available defenses.
          </div>
          <div className="mt-10 text-xl font-semibold">
            9. Limitations of Liability
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            9.1 No Investment Advice
          </div>
          <div className="px-5 pt-2 text-sm">
            The content on the Halal.io platform is provided for informational
            purposes only and does not constitute financial, legal, or tax
            advice. Halal.io is not a registered investment advisor and does not
            provide investment advisory services. You should consult with
            qualified professionals before making any financial decisions.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            9.2 No Guarantee of Returns
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io makes no representations or warranties regarding the
            potential success or profitability of any investment opportunities
            presented on the platform. Past performance is not indicative of
            future results, and there are no guarantees that any investment will
            achieve its intended outcomes.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            9.3 External Links
          </div>
          <div className="px-5 pt-2 text-sm">
            The Halal.io platform may contain links to third-party websites or
            services that are not owned or controlled by Halal.io. Halal.io has
            no control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services. By using the platform, you acknowledge and agree that
            Halal.io is not responsible for any damages or losses caused or
            alleged to be caused by or in connection with the use of or reliance
            on any such content, goods, or services available on or through any
            such websites or services.
          </div>
          <div className="mt-10 text-xl font-semibold">
            10. Governing Law and Dispute Resolution
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            10.1 Governing Law
          </div>
          <div className="px-5 pt-2 text-sm">
            These Terms shall be governed by and construed in accordance with
            the laws of the United Arab Emirates, specifically under the
            jurisdiction of the RAK Digital Assets Oasis (RAK DAO). RAK DAO
            provides a regulatory framework tailored for digital assets and
            decentralized finance, aligning with the objectives of Halal.io.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            10.2 Arbitration
          </div>
          <div className="px-5 pt-2 text-sm">
            Any disputes or claims arising from or relating to these Terms, or
            the services provided by Halal.io, shall be resolved through binding
            arbitration under the jurisdiction of RAK DAO. The arbitration will
            be conducted in accordance with the rules and procedures of RAK DAO,
            and the decision of the arbitrator shall be final and binding.
            Judgment on the arbitration award may be entered in any court having
            jurisdiction.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            10.3 Class Action Waiver
          </div>
          <div className="px-5 pt-2 text-sm">
            You agree that any dispute resolution proceedings will be conducted
            on an individual basis, not as part of a class, consolidated, or
            representative action. You waive any right to participate in class
            actions or class-wide arbitration.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            10.4 Severability
          </div>
          <div className="px-5 pt-2 text-sm">
            If any provision of these Terms is found to be invalid or
            unenforceable by an arbitrator or court within the RAK DAO
            jurisdiction, that provision shall be enforced to the maximum extent
            permissible, and the remaining provisions shall remain in full force
            and effect.
          </div>
          <div className="mt-10 text-xl font-semibold">
            11. Governing Law and Dispute Resolution
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            11.1 Entire Agreement
          </div>
          <div className="px-5 pt-2 text-sm">
            These Terms, together with the Privacy Policy and any other legal
            notices provided by Halal.io, constitute the entire agreement
            between you and Halal.io regarding your use of the platform. This
            agreement supersedes any prior agreements, communications, or
            understandings, whether oral or written, between you and Halal.io.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">11.2 Waiver</div>
          <div className="px-5 pt-2 text-sm">
            The failure of Halal.io to enforce any right or provision of these
            Terms shall not constitute a waiver of such right or provision. Any
            waiver of any provision of these Terms will be effective only if in
            writing and signed by a duly authorized representative of Halal.io.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">11.3 Assignment</div>
          <div className="px-5 pt-2 text-sm">
            You may not assign or transfer these Terms, by operation of law or
            otherwise, without Halal.io’s prior written consent. Any attempt by
            you to assign or transfer these Terms without such consent will be
            null and void. Halal.io may freely assign or transfer these Terms
            without restriction.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            11.4 Force Majeure
          </div>
          <div className="px-5 pt-2 text-sm">
            Halal.io shall not be liable for any delays or failures in
            performance resulting from circumstances beyond its reasonable
            control, including acts of God, war, terrorism, riots, embargoes,
            acts of civil or military authorities, fires, floods, accidents,
            network infrastructure failures, strikes, or shortages of
            transportation facilities, fuel, energy, labor, or materials.
          </div>
          <div className="text-md px-5 pt-5 font-semibold">
            11.5 Contact Information
          </div>
          <div className="px-5 pt-2 text-sm">
            If you have any questions about these Terms, please contact us:
            <a
              className="underline"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUL1wFrpYtOwlNd2w7P1l1tAr3wjgZzaoXJWoA6Gsosn51sg/viewform"
            >
              {" "}
              https://halal.io/contact
            </a>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <section className="relative overflow-hidden rounded-xl py-12 sm:py-12 lg:py-12">
          {/* Background layers */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/_static/landing/Vector.webp"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at top right, #402d21 20%, #000000 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 text-center">
            <h1 className="text-balance font-urban text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[50px]">
              Have a more Questions?
            </h1>

            <div className="flex justify-center space-x-2 md:space-x-4">
              <Link
                href="https://getwaitlist.com/waitlist/8535"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    rounded: "full",
                  }),
                  "px-5, bg-white",
                )}
              >
                <p>
                  <span className="text-black sm:inline-block">
                    Invest in $HDF
                  </span>
                </p>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUL1wFrpYtOwlNd2w7P1l1tAr3wjgZzaoXJWoA6Gsosn51sg/viewform"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    rounded: "full",
                  }),
                  "px-5",
                )}
              >
                <p>
                  <span className="text-white hover:text-black sm:inline-block">
                    Contact Us
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
