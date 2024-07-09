import BeatRevivalLayout from "../components/BeatRevivalLayout";

export default function Home() {
  return (
    <BeatRevivalLayout>
      <p className="text-xl">
        If you would like to enquire about the project, you can contact Loomeh
        on these services:
        <ul>
          <li>- Reddit - u/Loomeh</li>
          <li>- Discord - Loomeh</li>
          <li>- Email - loomeh@proton.me</li>
        </ul>
        <br/>
        <strong>Do not contact Loomeh for general support questions. Please ask for
        support in the Beat Revival Discord (Look in the Community tab).</strong> <br/><br/><i>(If you&lsquo;re in our Discord you can
        also just ask there. This is the recommended way to ask questions and
        you&lsquo;ll most likely get your answer quicker.)</i>
      </p>
    </BeatRevivalLayout>
  );
}
