import InputBox from "./InputBox";

function Text() {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 min-h-screen p-8 font-sans">
            <div className="container mx-auto px-6 py-8 max-w-6xl">
                <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-2xl">
                    GDSC SNIoE Dev Team Recruitments
                </h1>
                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 shadow-2xl rounded-lg p-8">
                    <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                        Welcome to the GDSC SNIoE Dev Team recruitment test! We're excited to have you here. This page contains everything you need to know about the task, so let's walk through it together:
                    </p>
                    <ol className="space-y-8 text-gray-700 list-none">
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</span>
                            <strong className="text-purple-700 text-xl">Style This Page:</strong>
                            <p className="mt-2">Start with the basics of this page. It’s quite simple right now, but we want you to make it shine! Use Tailwind CSS (or any other CSS framework, even plain CSS) to enhance the design, improve the layout, and give it your personal touch. Your goal is to make this page look polished and user-friendly. You can inspect this page and use the source code as your base.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</span>
                            <strong className="text-purple-700 text-xl">Create the Input Box:</strong>
                            <p className="mt-2">You’ll notice there’s a placeholder here for an input box. Your job is to add that input box so users can submit their text. Style it, make sure it works smoothly, and ensure it looks good on all devices, whether it’s a phone, tablet, or desktop.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</span>
                            <strong className="text-purple-700 text-xl">Build a Submission System:</strong>
                            <p className="mt-2">Next, you’ll need to set up a system to save what users submit in the input box. You can use any backend technology or storage method you like (e.g., a database, file system). The important thing is that the data is saved and can be retrieved later. You’re free to choose the tools and methods that work best for you—there’s no right or wrong here, just show us your thought process!</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</span>
                            <strong className="text-purple-700 text-xl">Display the Submissions:</strong>
                            <p className="mt-2">Once you’ve got submissions coming in, you’ll want to display them. This could be a simple list in HTML, or something more elaborate like an admin panel with filtering options. It’s up to you—just make sure it’s easy to use and displays all your stored data properly.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</span>
                            <strong className="text-purple-700 text-xl">Go Live:</strong>
                            <p className="mt-2">When everything is working, it’s time to take your project live! Deploy this page to a hosting service and method of your choice, and make sure it’s accessible to anyone with the link. Some recommendations are Vercel, Netlify, and Heroku. If your link is not up 24/7, that's not a problem. We just want to see how you deploy your project.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">6</span>
                            <strong className="text-purple-700 text-xl">Add Some Documentation:</strong>
                            <p className="mt-2">We’d love to hear about how you approached this task. Write a brief README file that explains what you did, the tools you used, the problems you faced, and how to run everything locally. Make sure to include the link to your deployed page, too.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">7</span>
                            <strong className="text-purple-700 text-xl">Take Your Time, But Not Too Much!</strong>
                            <p className="mt-2">You have 2 weeks (until 12:00 AM, 19th September 2024) to complete this task. We’re not looking for perfection; we’re interested in seeing how you approach problem-solving and design. Focus on doing your best within the time you have, and finish however much of this task you can! Even if you don’t finish the project, submit what you’ve got—we just want to see how you approach problems. We’re evaluating your programming skills, thought process, and even how you research and learn along the way.</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">8</span>
                            <strong className="text-purple-700 text-xl font-bold">How We'll Evaluate:</strong>
                            <p className="mt-2">Design & Usability: How good does this page look, and how easy is it to use?<br />
                               Functionality: Does everything work as expected?<br />
                               Code Quality: Is your code clean, organized, and easy to follow?<br />
                               Creativity: Did you add any unique or innovative features?<br />
                               Deployment: Is the page live and accessible via the link you provide?<br />
                               Your Approach: Did you clearly explain your approach in the README?</p>
                        </li>
                        <li className="relative pl-10">
                            <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">9</span>
                            <strong className="text-purple-700 text-xl">How to Submit:</strong>
                            <p className="mt-2">When you’re ready, push your code to a GitHub repository and share the link along with the URL of your live page. Make sure we can access everything so we can check out your work!</p>
                        </li>
                    </ol>
                    <p className="mt-6 text-gray-700 text-lg leading-relaxed">That's it! We're looking forward to seeing how you make this page your own. Have fun with the challenge, and good luck!</p>
                </div>
                <div className="mt-12 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 shadow-2xl rounded-lg p-8">
                    <h2 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Submit Your Task</h2>
                    <InputBox />
                </div>
            </div>
        </div>
    );
}

export default Text;
