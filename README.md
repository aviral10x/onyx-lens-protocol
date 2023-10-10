## LensOnyx

LensOnyx is a platform that helps people create on-chain developer communities on Lens Protocol and leverages Onyx for Verifiable Credentials.
People/Companies with good on-chain reputation on Lens Protocol can create their communities using LensOnyx. Participants in these on-chain communities will receive verifiable credentials that are issued using Onyx. Participants will have to collect these Verifiable Credentials to unlock other benefits.

## Problem

1. **Lack of Transparency:** Users don't have visibility to the on-chain activities of others.
2. **Difficulty in Onboarding:** Onboarding developers and creating a community can be challenging on traditional platforms.
3. **Inadequate Recognition:** Developers can't showcase their projects and their Proof of Work. Also, the companies can't verify the authenticity of projects and developers.

## Solution

- **Seamless Onboarding:** With just a single click of a button, users can easily onboard onto the LensOnyx platform and can access developer communities.
- **Credential Issuance:**
- **Verifiable Credentials** Developers will get Verifiable Credentials on completing projects and tasks.
- **Voting:** Developers can vote on differ

## Sponsors Used

### Onyx SDK

- **Admins of on-chain communities(DAOs):** Businesses can effortlessly register on our platform using Biconomy Social onboarding, ensuring a hassle-free experience.
- **Members of on-chain communities(DAOs):**

### Visa: B2B Payments

- **Admins of on-chain communities(DAOs):** LensOnyx can be used by existing Web3 companies to scale their developer community.
- **Tools for Better Developer Experience**

### Lens Protocol

- **On-chain Reputation:** People/Companies with certain number of stats on Lens Protocol(followers, collects, publications) can create communities on LensOnyx
- **Lens Protocol Social Graph:** Developers can complete their assignments and can post using Lens Protocol

### Magic SDK

- **Seamless Onboarding:** With just a single click of a button, users can easily onboard onto the LensOnyx platform and can access developer communities. Web2 Developers can use the social login feature of Magic SDK and can hold Verifiable Credentials in their smart contract accounts.

### zkSync

- **Paymaster:** All the on-chain activities done by the developers like voting on projects and submitting projects will be sponsored by the platform, providing a smooth and gasless UX.
- **Onyx SSI SDK x zkSync AA Open Track:** Developers are issued Verifiable Credentials as they keep on completing the assignments and interact with other projects.

## Workflow

**Signing Up**: Participants and Developers can sign in using Magic users using magic link and Biconomy Bundler and Paymaster,which creates a smart contract account for the user.

**Onboarding**: We onboard companies by simply taking their details like name, addrs, taxNo., RegistrationNo., etc. and store it in firebase(for now). Once it is stored we allow the user to generate verifiable credentials and create a passcode which stores Signed JWT in an encrypted formed in the Secure local storage & will later be used to verify thier credentials. The Unsigend VCs are being stored on Firebase for records

**Invoice**: Here, the user can the invoices that are created for them and pay them using Biconomy Gasless Transactions and can even create invoices for other business that they deal with to request payments. We show the recepeint business data like there Score , credentials and badged to build trust and imnprove transparency

**Transactions**: Here, user can see all past payments.

**VPs**: User can generate VPs here using the Onyx SSI SDK, that ensures more creditibility to the company, and can be used easily to provide a proof to recieve payments. Verification happens on the backend Server that handles the API to verify Presentation JWT , verify Credential JWTs , verify vailidity of Schema , Expiry and revocation status

## Images

## Links

## Roadmap
