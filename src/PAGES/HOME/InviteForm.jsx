import React from "react";

function InviteForm() {
  return (
    <>
      <div className=" py-8 flex w-11/12 lg:w-full m-auto justify-center alignation font-fredoka">
        <div className="lg:w-2/5 p-4 px-6 bg-gradient-to-tr from-green-700 to-blue-900 rounded-lg w-80">
          <h3 className="font-bold text-yellow-400">Invite your Friends!!!</h3>
          <form>
            <label
              htmlFor="friendGmail"
              className="text-white small-text secter line-clamp-1"
            >
              Kindly enter the Email address of the friend you want to refer to
              send an invite.
            </label>
            <input
              type="email"
              placeholder="E-mail address"
              className="mt-2 mb-3 w-full outline-none p-3  rounded small-text bg-transparent border border-yellow-400 text-white"
            />
            <button className="bg-transparent border border-yellow-400 px-4 py-2 rounded  bg-gradient-to-tl from-white/25 to-white/0  text-white font-semibold text-xs">
              Send Invite
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InviteForm;
