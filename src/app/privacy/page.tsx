import { Footer } from "../footer";
import { Link } from "../link";
import { Logo } from "../logo";

export default function PrivacyPage() {
  const bulletListClassNames = "list-disc pl-8";
  const h3ClassNames = "text-xl mb-[-0.8rem]";
  const services = [
    {
      name: "Vercel",
      dataStorage: "Serverless",
      description:
        "We use Vercel to host our service. Vercel is a cloud platform that allows us to build and deploy our service in a secure and scalable manner.",
      link: "https://vercel.com/legal/privacy-policy",
    },
    {
      name: "Inngest",
      dataStorage: "In-transit",
      description:
        "We use Inngest to handle our ingestion of data from all the apps.",
      link: "https://www.inngest.com/privacy",
    },
    {
      name: "Supabase",
      dataStorage: "At rest",
      description:
        "We use Supabase to store our data. Supabase is a cloud-based database that allows us to store and manage our data in a secure and scalable manner.",
      link: "https://supabase.com/privacy",
    },
  ];

  return (
    <>
      <header className="flex justify-center mb-12">
        <Logo className="w-32" />
      </header>
      <main className="ml-auto mr-auto flex flex-col gap-4 max-w-3xl text-sm">
        <h1 className="text-3xl text-center">Privacy Notice</h1>
        <p className="text-center">Last updated on April 30, 2024</p>
        <p>
          This Privacy Notice applies to you if you use our Service, if you are
          a business partner or supplier, or if ou use this website, and even if
          you communicate with us via email, or if you otherwise interact with
          us through other platforms.
        </p>
        <p>
          If you are an existing customer, business partner or supplier of ours,
          further details about how we use your Personal Data will be set out in
          your contract with us.
        </p>
        <span className="font-bold">Definitions:</span>
        <ul className={bulletListClassNames}>
          <li>
            Personal Data means information relating to a living individual (a
            ”Data Subject”) who is, or can be, reasonably identified from
            information, either alone or in conjunction with other information.
          </li>
          <li>Customer is the business that holds a Skyffel account.</li>
          <li>Customer User is an individual that uses the Skyffel service.</li>
          <li>Visitor: you are a visitor to our website (skyffel.com).</li>
        </ul>
        <h3 className={h3ClassNames}>Who we are, and your personal data</h3>
        <p>
          For the purpose of your interactions with Skyffel AB, Sweden,
          (Skyffel, ‘we’, ‘us’, ‘our’), we are a Data Controller when we are
          using personal data collected to improve and secure the service, and
          to enable us to work together with our business partners, service
          providers (‘Third Parties) and consultants. We are a Data Processor
          when we are a supplier of the Skyffel Service to our Customers.
        </p>
        <p>
          If you are a Customer User, Skyffel is a control panel for engineering
          teams that glues all of your tools together. Skyffel indexes your
          data, incuding but not limited to chat, code, issues, document and
          other information. We make it easy for you to find the information you
          need and to share it with your teams by allowing you to search across
          apps and augment it with contextual information.
        </p>
        <h3 className={h3ClassNames}>
          Why does Skyffel need your personal data?
        </h3>
        <p>
          Skyffel uses your personal data to manage and provide a quality
          Service, to ensure that the content is presented in the most effective
          manner for you and your device, and to allow you to participate in
          interactive features of our Service. Additionally, we use Personal
          Data to keep the Service safe and secure, administer our Service for
          internal operations, including troubleshooting, data analysis
          (including traffic data analysis) and testing.
        </p>
        <p>
          Skyffel may access the User’s account and data and undertakes to keep
          the collected data confidential and not to use it for other purposes
          than providing the Service.
        </p>
        <h3 className={h3ClassNames}>
          How long will we store your personal data?
        </h3>
        <p>
          Skyffel will only store your Personal Data for as long as it is
          required for the performance of contractual obligations with their
          customers, to make its services available to you. Skyffel will also
          retain your Personal Data for additional periods if applicable laws
          require it.
        </p>
        <ul className={bulletListClassNames}>
          <li>Deletion of personal data used by AI</li>
          <li>
            It is our customer who decides how long personal data is stored in
            Skyffel for the use of AI is retained.
          </li>
          <li>
            The customer can select that Skyffel deletes all personal data used
            by AI as of immediate effect.
          </li>
          <li>
            Upon termination of a customer contract with us, we will delete all
            personal data used by AI after 3 months.
          </li>
          <li>
            If a customer defaults on subscription payments, Skyffel will delete
            all personal data used by AI after 6 months.
          </li>
        </ul>
        <h3 className={h3ClassNames}>How do we protect your personal data?</h3>
        <p>
          We implement security measures commiserate to the risk assessed on
          processing of your Personal Data. We maintain appropriate
          organisational, technical and contractual safeguards to protect
          against loss, misuse or unauthorised access, disclosure, alteration or
          destruction of Personal Data. Access to your Personal Data is
          restricted using the ‘need-to-know’, ‘need-to- access’ principle. Our
          service providers adhere to internationally recognised security
          standards and your Personal Data is stored on secure servers.
        </p>
        <p>
          To find more on how personal data is protected, check the links to the
          Privacy Notices of online services we use to deliver the Skyffel
          service in the following section.
        </p>
        <h3 className={h3ClassNames}>
          With whom we may share your Personal Data?
        </h3>
        <p>
          We may in some situations share your Personal Data with third parties
          such as business partners, suppliers, vendors, consultants, agencies,
          customers, supply and service providers (‘Third Parties’). We only
          share Personal Data where it is relevant and necessary for us to
          perform the activities described in this Privacy Notice.
        </p>
        <p>
          Below is a list of services we use to deliver the Skyffel Service.
        </p>
        <table className="text-xs table-auto">
          <thead className="text-left">
            <tr>
              <th className="p-2">Service name</th>
              <th className="p-2">Data storage</th>
              <th className="p-2">Data processing description</th>
              <th className="p-2">Link to Privacy Notice</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.name}>
                <td className="p-2">{service.name}</td>
                <td className="p-2">{service.dataStorage}</td>
                <td className="p-2">{service.description}</td>
                <td className="p-2">
                  <Link className="hover:underline" href={service.link}>
                    {service.link}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          We do use third-party service providers outside of the European
          Economic Area (the “EEA”) which means that we will transfer your
          Personal Data to countries outside the EEA. If these transfers are to
          a country for which the EU Commission has not issued an adequacy
          decision, Nightshift Habits uses the EU standard contractual clauses
          to contractually require that your Personal Data receives a level of
          data protection consistent with the EEA.
        </p>
        <h3 className={h3ClassNames}>
          What are your rights as a data subject?
        </h3>
        <p>
          If we use your Personal Data for the activities mentioned in this
          Privacy Notice, you may request:
        </p>
        <ul className={bulletListClassNames}>
          <li>
            further details about how we use your Personal Data, including
            receiving a copy of your Personal Data
          </li>
          <li>that we correct, update or erase your Personal Data</li>
          <li>that we restrict the use of your Personal Data</li>
          <li>
            object to us using it, or that we use it for direct marketing and/or
            automated decision making, including profiling
          </li>
          <li>
            that we transfer your Personal Data to you or a Third Party (data
            portability)
          </li>
        </ul>
        <p>
          If we use your Personal Data specifically based on our legitimate
          interests, you may at any time object to us using your Personal Data
          based on this legal basis. Please note that these rights are subject
          to certain exemptions and may not all be available in the country in
          which you are based. This might be due to obligations imposed upon us,
          such as other legislation requiring us to retain the Personal Data,
          protection of the rights and freedoms of others, or the like. You will
          be informed if this is the case.
        </p>
        <h3 className={h3ClassNames}>How to exercise your rights</h3>
        <p>
          If you wish to exercise your rights, you can contact us by sending an
          email to <a href="mailto:privacy@skyffel.com">privacy@skyffel.com</a>.
          If you have any queries that cannot be clarified as a result of
          internal dialogue with us or you wish to file a complaint, you can
          contact the Swedish Authority for Privacy Protection at the Swedish
          Data Protection Authority.
        </p>
        <h3 className={h3ClassNames}>
          Updates to this Privacy Notice Any changes to this Privacy
        </h3>
        <p>
          Notice will be made on this page and the date of the latest update is
          shown in the header section.
        </p>
      </main>
      <Footer />
    </>
  );
}
