import Image from "next/image";
import { Irish_Grover,Nanum_Pen_Script } from "next/font/google";
import takexam from "./../public/takexam.svg";
import start from "./../public/get_started.svg";
import testpic from "./../public/exams.svg";
import testBro from "./../public/test-bro.svg";
import linkedin from "./../public/linkedin.svg";
import telegram from "./../public/telegram.svg";
import twitter from "./../public/twitter.svg";
import facebook from "./../public/facebook.svg";
import Link from "next/link";
const script = Nanum_Pen_Script({weight:"400",subsets:['latin']})
const irish= Irish_Grover({weight:"400",subsets:['latin']})
function Hero() {
  return (
    <div className="text-blue-500">
      <div className="hero relative">
        <div className="absolute hidden sm:flex bottom-0 right-0 -mb-28 blur-[150px] w-96 h-64 rounded-full bg-green-500"></div>
        <div className="absolute left-0 blur-[150px] w-64 h-64 rounded-full bg-blue-600"></div>
        <div className="  relative">
          <div className="flex w-full flex-col items-center sm:flex-row justify-center sm:px-20">
            <Image
              src={takexam}
              width={100}
              height={100}
              className="w-1/2 sm:hidden"
            />
            <div className=" flex flex-col justify-center sm:w-1/2">
              <div className={`${irish.className} sm:text-left mx-auto sm:m-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold sm:flex flex-col text-center`}>
                <span>Prepare,</span>
                <span>Practice,</span>
                <span>Pass Your Exam</span>
              </div>
              <div className={`${script.className} mx-auto sm:mx-0 flex sm:w-full w-5/6 mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl capitalize text-center sm:text-left`}>
                practive test questions and quizzes so you can identify gaps and
                strengthen weak areas
              </div>
            </div>
            <Image
              src={takexam}
              width={100}
              height={100}
              className="w-1/2 hidden sm:flex"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-5">
            <Link href={"/home"}>
              <Image
                src={start}
                width={100}
                height={100}
                className="w-11 sm:w-16 md:w-20 lg:w-24"
              />
            </Link>
            <div className="text-md md:text-3xl">Get Started</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full md:px-28 mt-10">
        <div className="hidden sm:flex justify-center items-center w-1/2">
          <Image src={testpic} width={100} height={100} className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center sm:w-1/2">
          <div className={`${irish.className} text-center sm:text-left mx-5 sm:mx-0 capitalize lg:text-6xl font-bold md:text-3xl text-2xl`}>
            MCQ questions for various field of study
          </div>
      <div className={`${script.className} mt-5 text-lg md:text-2xl text-center sm:text-left mx-5 sm:mx-0`}>
            we are delighted to offer you an extensive collection of hundreds of
            questions.whether you're preparing for standardized test, a final
            exam, or any other evaluation, ou diverse range of questions is
            tailored to sharpen your knowledge and boost you confidence.
          </div>
        </div>
      </div>
      <div className="flex md:px-28 relative mt-5 sm:mt-24">
        <div className="absolute hidden sm:flex -left-52  -mt-40 blur-[150px] w-96 h-96 rounded-full bg-blue-600"></div>
        <div className="sm:w-1/2 flex flex-col justify-center pl-5 md:pl-0">
          <div className={`${irish.className} text-3xl text-center sm:text-left md:4xl lg:text-6xl font-bold capitalize`}>
            examine yourself
          </div>
          <div className={`${script.className} text-xl md:text-2xl mt-5 mx-5 text-center sm:text-left sm:mx-0`}>
            practice questions provide valuable feedback on your performance. By
            reviewing your answers and comparing them to the correct solutions
            or explanations, you can identify specific areas where you may be
            struggling.
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex ">
          <Image src={testBro} width={100} height={100} className="w-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export const Footer = () => {
  return (
    <div className="pt-5 bg-blue-500 text-white">
      <div className="flex justify-around">
        <div className="flex flex-col text-sm md:text-xl w-1/2">
          <span className="font-bold">Contact</span>
          <span>Phone No: 0949157320</span>
          <span>Email: birhanunegash9@gmail.com</span>
        </div>
        <div>
          <span>Follow Us On:</span>
          <div className="flex justify-between sm:w-1/2 sm:gap-5 mt-5">
            <Image src={facebook} width={24} height={25} className="w-10 md:w-14 "/>
            <Image src={telegram} width={50} height={50} className="w-10 md:w-14 "/>
            <Image src={linkedin} width={50} height={50} className="w-10 md:w-14  bg-white"/>
            <Image src={twitter} width={50} height={50} className="w-10 md:w-14 "/>
          </div>
        </div>
      </div>
      <div className="py-5 flex justify-center">&copy;ethioexam. All rights reserved</div>
    </div>
  );
};

export default Hero;
