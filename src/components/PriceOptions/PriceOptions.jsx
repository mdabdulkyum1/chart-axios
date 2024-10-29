import PriceOption from "../PriceOption/PriceOption";


function PriceOptions() {

    const gymMembershipOptions = [
        {
          id: 1,
          optionName: "Basic Membership",
          price: 29.99,
          features: [
            "Access to gym equipment",
            "Free fitness assessment",
            "Group fitness classes",
            "Locker room access"
          ]
        },
        {
          id: 2,
          optionName: "Standard Membership",
          price: 49.99,
          features: [
            "All Basic Membership features",
            "Access to cardio machines",
            "Unlimited group classes",
            "One personal training session per month"
          ]
        },
        {
          id: 3,
          optionName: "Premium Membership",
          price: 79.99,
          features: [
            "All Standard Membership features",
            "Access to specialized training areas",
            "Nutrition consultation",
            "Two personal training sessions per month",
            "Discount on merchandise"
          ]
        },
      
      ];
      

  return (
    <div className="m-12">
    <h1></h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                gymMembershipOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    </div>
  )
}

export default PriceOptions