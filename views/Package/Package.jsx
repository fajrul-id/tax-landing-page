import React from "react";
import { ScrollMouse } from "../../components";

const Package = () => {
  return (
    <section className="min-h-screen relative">
      <div className="m-10 mb-0 md:m-20">
        <div class="pricing-table-2 py-6 pb-20 md:py-12">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
                Pricing Plans
              </h1>
              <p class="text-gray-500 xl:mx-12">
                You have 3 plans to choose from for using FWR blocks. Basic
                blocks are FREE forever. Other premium blocks are also free. You
                can use it for your personal or commercial projects. Just don't
                forget to share our website or give attribution.
              </p>
            </div>

            <div class="pricing-plans lg:space-x-4 lg:flex lg:-mx-4 mt-6 md:mt-12">
              <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                <div class="pricing-plan border-t-4 border-solid border-white bg-transparent text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                  <div class="p-6 md:py-8">
                    <h4 class="font-medium leading-tight text-2xl mb-2">
                      Small Business
                    </h4>
                    <p class="text-gray-600">For small projects</p>
                  </div>
                  <div class="pricing-amount bg-gray-800 p-6 transition-colors duration-300">
                    <div class="">
                      <span class="text-4xl font-semibold">$19</span> /year
                    </div>
                  </div>
                  <div class="p-6">
                    <ul class="leading-loose">
                      <li>Upto 5 uses</li>
                      <li>Max 100 items/month</li>
                      <li>500 queries/month</li>
                      <li>Basic statistics</li>
                      <li>Email Support</li>
                    </ul>
                    <div class="mt-6 py-4">
                      <button class="border text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                <div class="pricing-plan border-t-4 border-solid border-white bg-transparent text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                  <div class="p-6 md:py-8">
                    <h4 class="font-medium leading-tight text-2xl mb-2">
                      Professional
                    </h4>
                    <p class="text-gray-600">For large scale projects</p>
                  </div>
                  <div class="pricing-amount bg-gray-800 p-6 transition-colors duration-300">
                    <div>
                      <span class="text-4xl font-semibold">$29</span> /year
                    </div>
                  </div>
                  <div class="p-6">
                    <ul class="leading-loose">
                      <li>Upto 50 uses</li>
                      <li>Max 500 items/month</li>
                      <li>1000 queries/month</li>
                      <li>Full statistics</li>
                      <li>Email Support</li>
                    </ul>
                    <div class="mt-6 py-4">
                      <button class="border text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                <div class="pricing-plan border-t-4 border-solid border-white bg-transparent text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                  <div class="p-6 md:py-8">
                    <h4 class="font-medium leading-tight text-2xl mb-2">
                      Power User
                    </h4>
                    <p class="text-gray-600">For multi large scale projects</p>
                  </div>
                  <div class="pricing-amount bg-gray-800 p-6 transition-colors duration-300">
                    <div class="">
                      <span class="text-4xl font-semibold">$39</span> /year
                    </div>
                  </div>
                  <div class="p-6">
                    <ul class="leading-loose">
                      <li>Unlimited uses</li>
                      <li>Unlimited items/month</li>
                      <li>Unlimited queries/month</li>
                      <li>Full statistics</li>
                      <li>Email &amp; Phone Support</li>
                    </ul>
                    <div class="mt-6 py-4">
                      <button class="border text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Let's Work Together
        <ScrollMouse />
      </div>
    </section>
  );
};

export default Package;
