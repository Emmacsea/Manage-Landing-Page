import logo from "../assets/images/logo.svg";
import img from "../assets/images/illustration-intro.svg";
import utube from "../assets/images/icon-youtube.svg";
import twit from "../assets/images/icon-twitter.svg";
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import pinte from "../assets/images/icon-pinterest.svg";
import avatar1 from "../assets/images/avatar-anisha.png";
import avatar2 from "../assets/images/avatar-ali.png";
import avatar3 from "../assets/images/avatar-richard.png";
import avatar4 from "../assets/images/avatar-shanai.png";

export default function Landing() {
  return (
    <div className="font-body bg-background-desk bg-center bg-cover">
      <header className="flex justify-between items-center pt-14 px-28">
        <div>
          <img src={logo} alt="Page Logo" />
        </div>

        <nav>
          <ul className="flex text-primary-darblue text-lg font-medium">
            <li className="ml-7">
              <a href="">Pricing</a>
            </li>
            <li className="ml-7">
              <a href="">Product</a>
            </li>
            <li className="ml-7">
              <a href="">About Us</a>
            </li>
            <li className="ml-7">
              <a href="">Careers</a>
            </li>
            <li className="ml-7">
              <a href="">Community</a>
            </li>
          </ul>
        </nav>

        <button type="button" className="btn">
          get started
        </button>
      </header>

      <main className="px-28 pt-28">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-primary-darblue text-6xl font-bold ">
              Bring everyone together to build better products.
            </h3>
            <p className="divp">
              Manage makes is simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button type="button" className="btn">
              get started
            </button>
          </div>

          <div className="flex justify-end items-end">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="flex justify-between items-start gap-36 pt-28">
          <div>
            <h3 className="text-primary-darblue text-4xl font-bold ">
              What&apos;s different about Manage?{" "}
            </h3>

            <p className="divp">
              Manage provides all the functionality your team needs, without the
              complexity. Our softwaare is tailor-made for modern digital
              product teams.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start gap-8 mb-6">
              <button type="button" className="btn">
                01
              </button>
              <div>
                <h2 className="divh2">Track company-wide progress</h2>
                <p className="divp">
                  See how your day-to-day tasks fit into the wider vision Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-start gap-8 mb-6">
              <button type="button" className="btn">
                02
              </button>
              <div>
                <h2 className="divh2">Advanced built-in reports</h2>
                <p className="divp">
                  Set internal delivery estimatesand track progress toward
                  company goals. Our customizable dasboard helps you build out
                  the reports you need to keep key stakholders informed.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-start gap-8 ">
              <button type="button" className="btn">
                03
              </button>
              <div>
                <h2 className="divh2">Everything you need in one place</h2>
                <p className="divp">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="pt-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-primary-darblue text-4xl text-center font-bold">
            What they&apos;ve said
          </h2>
          <div className="flex justify-between items-center gap-7 pt-24 pb-11">
            <div className="box">
              <div className="absolute -top-12 ">
                <img className="w-24" src={avatar1} alt="" />
              </div>
              <div className="pt-6">
                <h2 className="boxh">Anisha Li</h2>
                <p className="boxp">
                  &quot;Manage has supercharged our team&apos;s workflow. The
                  ability to maintain visibility on larger milestones at all
                  times keeps everyone motivated. &quot;
                </p>
              </div>
            </div>

            <div className="box">
              <div className="absolute -top-12 ">
                <img className="w-24" src={avatar2} alt="" />
              </div>
              <div className="pt-6">
                <h2 className="boxh">Ali Bravo</h2>
                <p className="boxp">
                  &quot;We have been able to cancel so many other subscriptions
                  since using Manage. There is no moe=re cross-channel confusion
                  and everyone is much more focused. &quot;
                </p>
              </div>
            </div>

            <div className="box">
              <div className="absolute -top-12 ">
                <img className="w-24" src={avatar3} alt="" />
              </div>
              <div className="pt-6">
                <h2 className="boxh">Richard Watts</h2>
                <p className="boxp">
                  &quot;Manage allows to provide structure and process. It keeps
                  us organized and focused. I can&apos;t stop recommending them
                  to everyone i talk to. &quot;
                </p>
              </div>
            </div>

            <div className="box">
              <div className="absolute -top-12 ">
                <img className="w-24" src={avatar4} alt="" />
              </div>
              <div className="pt-6">
                <h2 className="boxh">Shanai Gough</h2>
                <p className="boxp">
                  &quot;Their software allows us to track, manage and
                  collaborate on our projects from anywhere. it keeps the whole
                  team in-sync without being intrusive. &quot;
                </p>
              </div>
            </div>
          </div>
          <button type="button" className="btn">
            get started
          </button>
        </div>

        <div className="mt-28 bg-primary-brightred px-28 py-12">
          <div className="flex justify-between items-center">
            <p className="text-neutral-vlightgray text-4xl font-medium ">
              Simplify how your team
              <br /> works today.
            </p>
            <button type="button" className="bta">
              get started
            </button>
          </div>
        </div>

        <div className="bg-neutral-vdarkblue px-28 py-14 flex justify-between items-start">
          <div className="flex flex-col gap-20">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="flex gap-2">
              <a href="http://www.fb.com">
                <img src={fb} alt="" />
              </a>
              <a href="http://www.youtube.com">
                <img src={utube} alt="" />
              </a>
              <a href="http://www.x.com">
                <img src={twit} alt="" />
              </a>
              <a href="http://www.pinterest.com">
                <img src={pinte} alt="" />
              </a>
              <a href="http://www.instagram.com">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>

          <div>
            <nav>
              <ul className="flex flex-col gap-2 text-neutral-vlightgray text-lg font-light">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <nav>
              <ul className="flex flex-col gap-2 text-neutral-vlightgray text-lg font-light">
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-20 items-end">
            <div>
              <form action="" className="flex gap-4">
                <input className="input" type="text" placeholder="Updates in your inbox" />
                <button type="submit" className="btn">
                  Go
                </button>
              </form>
            </div>

            <div className="text-neutral-vlightgray font-extralight text-sm">
                <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
