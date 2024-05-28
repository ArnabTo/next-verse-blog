import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
    return (
        <div className="bg-[#252525] max-w-7xl mx-5 lg:mx-auto p-10 rounded-2xl  my-5">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-2 my-4">
                    <h2 className="text-3xl font-medium text-white lg:w-[70%]">Ready to get our new blog update?</h2>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 w-full max-w-sm items-center space-x-2 mt-4">
                        <Input className='bg-white rounded-2xl' type="email" placeholder="Email" />
                        <Button className='bg-black text-white rounded-2xl' type="submit">Subscribe</Button>
                    </div>
                    {/* <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                        <input type="text" placeholder="name" className="w-full bg-white px-2 py-2 rounded-2xl border-[1px] border-white outline-none" />
                        <Button className='relative -left-28 bg-black text-white rounded-2xl' type="submit">Subscribe</Button>
                    </div> */}
                </div>
                <div className="lg:w-1/2 flex justify-center items-end">
                    <p className="text-white flex justify-center items-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;