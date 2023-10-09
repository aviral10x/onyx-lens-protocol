"use client";
import {
  useActiveProfile,
  useProfileFollowers,
  ProfileId,
} from "@lens-protocol/react-web";
import { useState } from "react";
import { ProfileFragment } from "@lens-protocol/react";

function Search() {
  const { data: profile } = useActiveProfile();
  // const { data: profileFollowers } = useProfileFollowers("0x01e724");

  // async function follow(profile) {
  //   // setId(profile?.id);
  //   // console.log(id);

  //   console.log(profileFollowers);
  // }

  // const following = useProfileFollowers({
  //   profileId: profile?.data?.id as ProfileId,
  //   limit: 25,
  // });

  return (
    <main className="px-10 py-14">
      <div>
        <a
          rel="no-opener"
          target="_blank"
          href={`https://share.lens.xyz/u/${profile?.handle}`}
        >
          <div className="border rounded-lg p-10">
            <div>
              <div className="mt-4">
                <p className="text-primary font-medium">
                  {profile?.stats.totalFollowers}
                </p>
              </div>
              {profile?.picture?.__typename === "MediaSet" && (
                <img
                  src={profile?.picture?.original?.url}
                  className="rounded w-[200px]"
                />
              )}
              {profile?.picture?.__typename === "NftImage" && (
                <img
                  src={profile?.picture?.uri}
                  className="rounded w-[200px]"
                />
              )}
            </div>

            <div className="mt-4">
              <p className="text-primary font-medium">{profile?.handle}</p>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Search;
