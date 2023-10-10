"use client";
import { useState } from "react";
import { privateKeyBufferFromString } from "./../utils/convertions";
import lens from "./../assets/lens.png";
import onyx from "./../assets/onyx.png";
import zksync from "./../assets/zksync.png";
import {
  KeyDIDMethod,
  createAndSignCredentialJWT,
} from "@jpmorganchase/onyx-ssi-sdk";
import {
  useActiveProfile,
  useProfileFollowers,
  ProfileId,
} from "@lens-protocol/react-web";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
interface PageProps {
  childComponent: React.ReactNode;
}
function Home() {
  const { data: profile } = useActiveProfile();
  const followers = profile?.stats.totalFollowers;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const getOnyxCredentials = async () => {
    const didKey = new KeyDIDMethod();

    const issuerDidWithKeys = await didKey.generateFromPrivateKey(
      privateKeyBufferFromString(
        "739b6ff017c0feae5d25ebcf5c88e4683a2b587748602c49d2ec5a49a2e3c2683dd84e0b19ffedafe1641cc35e6b7bb988c71ff841121512a65bb2352f644b8b"
      )
    );

    const holderDidWithKeys = await didKey.generateFromPrivateKey(
      privateKeyBufferFromString(
        "b00829d8d462b41eaf80ce170b29844110ffd95c3fd5d518e5c39e4723e38afb9a4f9a72bd38e11fc420d4bb0f1d0083acc68e3fe535b300714f1879f7e691d7"
      )
    );

    const vcDidKey = (await didKey.create()).did;

    const credentialType = "PROOF_OF_NAME";

    const subjectData = {
      name: "Jessie Doe",
    };

    //vc id, expirationDate, credentialStatus, credentialSchema, etc
    const additionalParams = {
      id: vcDidKey,
    };

    console.log(
      `\nGenerating a signed verifiable Credential of type ${credentialType}\n`
    );

    const signedVc = await createAndSignCredentialJWT(
      issuerDidWithKeys,
      holderDidWithKeys.did,
      subjectData,
      [credentialType],
      additionalParams
    );

    console.log(signedVc);
    window.alert(`Your Signed VC ${signedVc}`)

    console.log("\nSaving signed VC JWT\n");
  };
  return (
    <main>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              LensDao
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              Got a lens handle? Join the DAO to claim exclusive benefits with
              all the gas fees sponsored
            </p>
            <p className="mt-6 text-2xl leading-8 text-gray-600"></p>
            <div
              style={{
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "270px",
              }}
            >
              <img className="m-6" src={lens.src} />
              <img className="m-6" src={zksync.src} />
              <img
                className="m-6"
                style={{ width: "150px", height: "75px" }}
                src={onyx.src}
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="border-spacing-5 bg-slate-500 rounded-md border-2"
                onClick={() =>
                  (
                    document.getElementById("my_modal_2") as HTMLDialogElement
                  )?.showModal()
                }
              >
                Verify your lens handle
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  {profile?.picture?.__typename === "MediaSet" && (
                    <img
                      src={profile?.picture?.original?.url}
                      className="rounded w-[200px]"
                    />
                  )}
                  <h3 className="font-bold text-lg">
                    <span>
                      You have&nbsp;
                      {profile?.stats.totalFollowers} followers
                    </span>
                  </h3>
                  {followers > 2 ? (
                    <div>
                      <p className="py-4">
                        You are eligble to get onyx credentials
                      </p>
                      <button
                        onClick={getOnyxCredentials}
                        className="btn btn-neutral"
                      >
                        Get onyx credentials and enter the LensDao
                      </button>
                    </div>
                  ) : (
                    <p className="py-4">
                      You are not eligble to get onyx credentials
                    </p>
                  )}
                </div>
                <form method="dialog" className="modal-backdrop"></form>
              </dialog>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
