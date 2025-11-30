import { useState } from "react";

const Form1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validedSubmit = () => {
    if (
      !firstName.length ||
      !lastName.length ||
      !email.length ||
      !age.length ||
      !gender.length
    ) {
      alert("Please fill all the fields");
      return false;
    }
    return true;
  };
  const handleFormSubmit = () => {
    if (validedSubmit()) {
      alert("Form submitted successfully!");
    }
  };
  return (
    <form className="flex flex-col gap-5">
      {/* Email Input */}
      <div className="space-y-2">
        <label
          htmlFor="firstName"
          className="block text-sm font-semibold text-gray-700"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          required={true}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
        />
        {isSubmitting && firstName.length === 0 && (
          <span className="text-red-500">Please enter your first name</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="lastName"
          className="block text-sm font-semibold text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
        />
        {isSubmitting && lastName.length === 0 && (
          <span className="text-red-500"> Please enter your last name</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email "
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
        />
        {isSubmitting && lastName.length === 0 && (
          <span className="text-red-500">Please enter your Email</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="gender"
          className="block text-sm font-semibold text-gray-700"
        >
          Gender
        </label>
        <div className="flex flex-row">
          <input
            id="male"
            type="radio"
            name="gender"
            value={"Male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            placeholder="Male"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
          />
          <span>Male</span>
        </div>
        <div className="flex flex-row">
          <input
            id="female"
            name="gender"
            type="radio"
            value={"Female"}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Female"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
          />{" "}
          <span>Female</span>
        </div>
        {isSubmitting && gender.length === 0 && (
          <span className="text-red-500">Please enter your gender</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="age"
          className="block text-sm font-semibold text-gray-700"
        >
          Age
        </label>
        <input
          id="age"
          type="number"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age "
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder:text-gray-400"
        />
        {isSubmitting && age.length === 0 && (
          <span className="text-red-500"> Please enter your age</span>
        )}
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full px-4 py-3.5 rounded-xl text-base font-semibold cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
        onClick={(e) => {
          setIsSubmitting(true);
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        Sign In
      </button>
    </form>
  );
};
export default Form1;
