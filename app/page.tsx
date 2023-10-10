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
    window.alert(`Your Signed VC ${signedVc}`);

    console.log("\nSaving signed VC JWT\n");
  };
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
       
        <div className="relative isolate px-6  lg:px-8"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" style={{paddingTop:"-1000px"}}>
          <div className="text-center">
            <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl">
              OnyxDao
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              Got a lens handle?
              </p>
                <p className="mt-6 text-2xl leading-8 text-gray-600">
              Join the DAO by claiming your onyx credentials and get exclusive benefits with
              all the gas fees sponsored by zkSync Paymaster
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
                className="btn btn-neutral"
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

                  {followers > 2 ? (
                    <div>
                      <h3 className="font-bold text-lg">
                        <span>
                          You have&nbsp;
                          {profile?.stats.totalFollowers} followers
                        </span>
                      </h3>
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
     
      </div>
  );
}

export default Home;
