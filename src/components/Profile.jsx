import React from "react";
import CleaningImg2 from "../images/cleaning2.jpg"
const Profile=()=>{
    return(
        <div className=" bg-white w-full py-44 px-4">
            <div className=" max-w-[1240px]  mx-auto grid grid-cols-3 gap-8">   
            <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img className=" " src={ProfilePic} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>  <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
                        <div class="p-5">
                            <div className="text-medium mb-5">
                            <label className=" text-gray-700 flex mb-2"> Hellen Chawora </label>
                            <label className=" text-gray-700">BIO </label>
                            </div>                 
                            <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-[#ce8fc3] hover:shadow-md duration-75">See More</button>
                        </div>
                </div> 
                <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
                        <div class="p-5">
                            <div className="text-medium mb-5">
                            <label className=" text-gray-700 flex mb-2"> Hellen Chawora </label>
                            <label className=" text-gray-700">BIO </label>
                            </div>                 
                            <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-[#ce8fc3] hover:shadow-md duration-75">See More</button>
                        </div>
                </div>
                <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
                        <div class="p-5">
                            <div className="text-medium mb-5">
                            <label className=" text-gray-700 flex mb-2"> Hellen Chawora </label>
                            <label className=" text-gray-700">BIO </label>
                            </div>                 
                            <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-[#ce8fc3] hover:shadow-md duration-75">See More</button>
                        </div>
                </div> 
            </div>
        </div>
    )
}
export default Profile;
