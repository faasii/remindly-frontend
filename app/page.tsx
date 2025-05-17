import LoginButton from "@/components/module/home/loginButton";

export default function Home() {
  return (
    <div className="bg-neutral-900">

      <div className="bg-neutral-900 min-h-[85vh]">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0] ">Remindly:</span> The Smarter Way to Stay Ahead of Every Google Calendar Event </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              It is your personal scheduling assistant, built to bring clarity, control, and calm to your day. At Remindly, we integrate seamlessly with Google Calendar to deliver smart, customizable reminders—helping you manage time effortlessly and never miss a meeting, deadline, or commitment again.
            </p>
          </div>

          <LoginButton />

        </div>
      </div>

    </div>
  );
}
