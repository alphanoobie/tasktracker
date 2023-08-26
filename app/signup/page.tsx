export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
      <form className="flex flex-col">
        <label htmlFor="username" className="text-lg">Username</label>
        <input type="text" name="username" className="mb-2"/>

        <label htmlFor="password" className="text-lg">Choose Password</label>
        <input type="text" name="password" className="mb-2"/>

        <label htmlFor="cpassword" className="text-lg">Confirm Password</label>
        <input type="text" name="cpassword" className="mb-4"/>

        <button type="submit" className="bg-[#e7d7c1] text-lg rounded-full p-1 opacity-80 hover:opacity-100 ">Sign Up</button>
      </form>
    </div>
  );
}
