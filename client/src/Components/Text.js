import InputBox from "./InputBox";

function Text() {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 min-h-screen p-8 font-sans">
            <div className="container mx-auto px-6 py-8 max-w-6xl">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    GDSC SNIoE Dev Team Recruitments
                </h1>
                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 shadow-2xl rounded-lg p-8">
                    <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                        Welcome to the GDSC SNIoE Dev Team recruitment test! We're excited to have you here. This page contains everything you need to know about the task, so let's walk through it together:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <ol className="pl-6 space-y-4 text-gray-700 list-none">
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</span>
                                    <strong className="text-purple-700">Style This Page:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Start with the basics of this page. It’s quite simple right now, but we want you to make it shine! Use Tailwind CSS (or any other CSS framework, even plain CSS) to enhance the design, improve the layout, and give it your personal touch. Your goal is to make this page look polished and user-friendly. You can inspect this page and use the source code as your base.</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</span>
                                    <strong className="text-purple-700">Create the Input Box:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>You’ll notice there’s a placeholder here for an input box. Your job is to add that input box so users can submit their text. Style it, make sure it works smoothly, and ensure it looks good on all devices, whether it’s a phone, tablet, or desktop.</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</span>
                                    <strong className="text-purple-700">Build a Submission System:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Next, you’ll need to set up a system to save what users submit in the input box. You can use any backend technology or storage method you like (e.g., a database, file system). The important thing is that the data is saved and can be retrieved later. You’re free to choose the tools and methods that work best for you—there’s no right or wrong here, just show us your thought process!</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</span>
                                    <strong className="text-purple-700">Display the Submissions:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Once you’ve got submissions coming in, you’ll want to display them. This could be a simple list in HTML, or something more elaborate like an admin panel with filtering options. It’s up to you—just make sure it’s easy to use and displays all your stored data properly.</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</span>
                                    <strong className="text-purple-700">Go Live:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>When everything is working, it’s time to take your project live! Deploy this page to a hosting service and method of your choice, and make sure it’s accessible to anyone with the link. Some recommendations are Vercel, Netlify, and Heroku. If your link is not up 24/7, that's not a problem. We just want to see how you deploy your project.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <ol className="list-none pl-6 space-y-4 text-gray-700" start="6">
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">6</span>
                                    <strong className="text-purple-700">Add Some Documentation:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>We’d love to hear about how you approached this task. Write a brief README file that explains what you did, the tools you used, the problems you faced, and how to run everything locally. Make sure to include the link to your deployed page, too.</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">7</span>
                                    <strong className="text-purple-700">Take Your Time, But Not Too Much!</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>You have 2 weeks (until 12:00 AM, 19th September 2024) to complete this task. We’re not looking for perfection; we’re interested in seeing how you approach problem-solving and design. Focus on doing your best within the time you have, and finish however much of this task you can! Even if you don’t finish the project, submit what you’ve got—we just want to see how you approach problems. We’re evaluating your programming skills, thought process, and even how you research and learn along the way.</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">8</span>
                                    <strong className="text-purple-700">How We'll Evaluate:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Design & Usability: How good does this page look, and how easy is it to use?</li>
                                        <li>Functionality: Does everything work as expected?</li>
                                        <li>Code Quality: Is your code clean, organized, and easy to follow?</li>
                                        <li>Creativity: Did you add any unique or innovative features?</li>
                                        <li>Deployment: Is the page live and accessible via the link you provide?</li>
                                        <li>Your Approach: Did you clearly explain your approach in the README?</li>
                                    </ul>
                                </li>
                                <li className="relative pl-10">
                                    <span className="absolute left-0 top-0 bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">9</span>
                                    <strong className="text-purple-700">How to Submit:</strong>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>When you’re ready, push your code to a GitHub repository and share the link along with the URL of your live page. Make sure we can access everything so we can check out your work!</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
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
