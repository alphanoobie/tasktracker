export default function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col">
        <label htmlFor="username" className="font-satisfy">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Choose Password</label>
        <input type="text" name="password" />

        <label htmlFor="cpassword">Confirm Password</label>
        <input type="text" name="cpassword" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
