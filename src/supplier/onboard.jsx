import React from "react";
import { Button } from "../components/ui/button"; // Assuming a Button component
import { Card, CardContent } from "../components/ui/card"; // Assuming Card components
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"; // Collapsible component
import { Badge } from "../components/ui/badge"; // Badge component
import { Progress } from "../components/ui/progress"; // Progress bar component
import {Alert, AlertDescription} from "../components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons"; // Radix icons
import { ChevronDown, Info } from "lucide-react"; // Icon components
import productImg from "../assets/Frame_1000004018.jpg";
import kidsImg from "../assets/Frame 1000004017.jpg";
import fruitImg from "../assets/Rectangle626.jpg";
import tenantLogo from "../assets/Frame 1000003152.png";
const products = [
  {
    id: 1,
    name: "EUROCHEF Air Fryer Oven 16L Digital Electric Airfryer Rotisserie Large Big Dry Cooker, Silver",
    brand: "EUROCHEF",
    sku: "812869",
    image: productImg,
    testPlans: [
      {
        name: "Mandatory Electrical Home Appliance Test Matrix",
        description: "Lorem ipsum dolor sit amet consectetur. Ut aliquet lectus in faucibus ornare enim ut. Id dictumst eget sed cum risus. Est velit netus maecenas in id aenean lacus...",
        standards: ["AS 2070", "FDA 21 CFR 177.2600", "HB 295.3.10", "EN 14350"],
        status: "Complete",
      },
      {
        name: "Mandatory Electrical Home Appliance Test Matrix",
        description: "Lorem ipsum dolor sit amet consectetur. Ut aliquet lectus in faucibus ornare enim ut. Id dictumst eget sed cum risus. Est velit netus maecenas in id aenean lacus...",
        standards: ["AS 2070", "FDA 21 CFR 177.2600", "HB 295.3.10", "EN 14350"],
        status: "Complete",
      },
      {
        name: "Food Safety Contact Electrical Home Appliance Test Matrix",
        description: "Lorem ipsum dolor sit amet consectetur. Ut aliquet lectus in faucibus ornare enim ut. Id dictumst eget sed cum risus. Est velit netus maecenas in id aenean lacus...",
        standards: ["AS 2070", "FDA 21 CFR 177.2600", "HB 295.3.10", "EN 14350"],
        status: "Incomplete",
      }
    ],
  },
  {
    id: 2,
    name: "Kids Bubble Lawnmower Bubbles Machine Blower Outdoor Garden Party Toddler Toy",
    brand: "KIDSTOYS",
    sku: "812869",
    image: kidsImg,
    testPlans: [],
  },
  {
    id: 3,
    name: "62 Pieces Kitchen Pretend Play Food Set for Kids Cutting Fruits Vegetables Pizza Toys Set",
    sku: 812869,
    image: fruitImg,
    testPlans: []
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex items-center  border-b bg-black px-4 py-2">
        <div className="flex items-center gap-2 w-full justify-between max-w-[1600px] mx-auto">
          <div className="flex text-white">
            <span className="text-sm ">Powered by</span>
            <img
                src="/tenantLogo.svg"
                alt="SupplyScope"
                width={100}
                height={24}
                className="h-6"
              />
          </div>
        <div className="flex gap-2">
          <Button className="bg-white" variant="ghost">Sign Up</Button>
          <Button className="bg-blue-700" variant="default">Login</Button>
        </div>
        </div>
      </header>

      <div className="mb-6 flex items-center justify-between bg-white py-5">
        <div className="flex items-center gap-2 w-full max-w-[1600px] mx-auto justify-between">
            <div className="flex items-center gap-4">
                <img
                      src={tenantLogo}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
              <div>
                <h1 className="text-xl font-semibold">
                  Product Compliance for MyDeal
                </h1>
                <p className="text-sm text-muted-foreground">Supplier A</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Finish later</Button>
              <Button variant="default">Final Submit</Button>
            </div>
          </div>
        </div>
      {/* Main Content */}
      <main className="max-w-[1500px]  mx-auto w-full px-4 py-6">
        {/* Message Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="mb-2 text-lg font-semibold">[messageHeader]</h2>
            <p className="text-muted-foreground">[messageText]</p>
            <Alert className="mt-4 bg-blue-50 flex items-center p-3">
              <InfoCircledIcon className="h-4 w-4 m-0" />
              <AlertDescription className="flex items-center text-indigo-600 pt-1">
                Make sure to complete all test plan requirements
                <span className="ms-1 font-bold">[tenantSupportMail]</span>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Submit Product Compliance */}
        <Card>
          <CardContent className="p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Submit Product Compliance</h2>
              <div className="flex items-start gap-2 flex-col">
                <span className="text-sm text-muted-foreground block pt-2">3 items</span>
                <div className="w-full flex items-center">
                <Progress value={90} className="h-1 w-full" />
                <span className="text-sm text-muted-foreground text-nowrap ms-3">
                  90% Uploaded
                </span>
                </div>
              </div>
            </div>

            <Alert className="mb-4 bg-yellow-50 flex items-center p-3 border-yellow-400 text-yellow-500">
              <InfoCircledIcon className="h-4 w-4 text-yellow-600" />
              <AlertDescription className=" pt-1">
                Make sure to complete all test plan requirements
              </AlertDescription>
            </Alert>

            {/* Product Items */}
            {products.map((product) => (
              <Collapsible key={product.id} className="mb-4 rounded-lg border bg-white">
                <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-normal text-left text-sm">{product.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{product.brand}</span>
                        <span>{product.sku}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border-t p-4">
                    {product.testPlans.length > 0 ? (
                      <table className="w-full">
                        <thead className="bg-slate-50 text-sm border-b">
                          <tr>
                            <th className="p-3 text-left font-normal text-sm text-gray-500">Test Plan</th>
                            <th className="p-3 text-left font-normal text-sm text-gray-500">Description</th>
                            <th className="p-3 text-left font-normal text-sm text-gray-500">Standards</th>
                            <th className="p-3 text-left font-normal text-sm text-gray-500">Status</th>
                            <th className="p-3 text-left font-normal text-sm text-gray-500">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.testPlans.map((plan, index) => (
                            <tr key={index} className="border-0">
                              <td className="p-2 text-sm">{plan.name}</td>
                              <td className="p-2 text-sm">
                                {plan.description}
                                <button className="text-blue-600 text-sm block mt-1.5">Read More</button>
                              </td>
                              <td className="p-2 text-sm">
                               {plan.standards.join(", ")}
                                <Button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm p-2 leading-none me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ms-2">+more</Button>
                              </td>

                              <td className="p-2 text-sm">
                                {(plan.status=='Incomplete') ? 
                                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{plan.status}</span>
                                  :
                                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{plan.status}</span>
                                }
                              </td>
                              <td className="p-2 text-sm">
                                <Button className="bg-white text-white text-sm text-black text-sm py-3 hover:text-white" >Review & Upload</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No Test Plans Available</p>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}

            <div className="mt-6">
              <Button variant="default">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App;
