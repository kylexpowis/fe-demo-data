import Navbar from "./Navbar";

function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center  bg-center text-white" style={{ maxHeight: '100vh', height: '90vh' }}>
                <div className="text-center px-5 mb-20">
                    <h1 className="text-7xl font-bold mb-4">Your answer to <span className="gradient-text">Financial Analysis.</span></h1>
                    <p className="text-2xl font-light">Invite only access to <span className="gradient-text">analytics</span> with <span className="gradient-text">accuracy</span>.</p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
