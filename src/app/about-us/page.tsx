"use client";
import Image from "next/image";
import { FaAd, FaAddressCard, FaAdversal, FaAngular } from "react-icons/fa";
const jobOpenings = [
  {
    id: 1,
    role: "Barista",
    description:
      "Prepare specialty coffee drinks, provide friendly and knowledgeable customer service, maintain a clean workspace, and contribute to the warm atmosphere of our shop.",
    salary: "$18–$22/hr + tips",
  },
  {
    id: 2,
    role: "Shift Lead",
    description:
      "Supervise daily operations, manage staff rotations, oversee opening/closing duties, ensure quality and consistency, and act as point-of-contact for customer concerns.",
    salary: "$23–$26/hr + tips",
  },
  {
    id: 3,
    role: "Roasting Assistant",
    description:
      "Assist in small-batch roasting operations, monitor quality control, manage green bean inventory, and maintain roasting equipment.",
    salary: "$20–$25/hr",
  },
  {
    id: 4,
    role: "Marketing Coordinator",
    description:
      "Develop and execute marketing campaigns, manage social media accounts, coordinate events, and analyze customer engagement metrics.",
    salary: "$50k–$60k/yr",
  },
  {
    id: 5,
    role: "Café Manager",
    description:
      "Oversee daily operations, manage staff, ensure quality control, handle customer service issues, and maintain inventory.",
    salary: "$60k–$70k/yr",
  },
  {
    id: 6,
    role: "Head Roaster",
    description:
      "Lead roasting operations, develop new blends, manage green bean sourcing, and train staff on roasting techniques.",
    salary: "$70k–$85k/yr",
  },
  {
    id: 7,
    role: "Digital Content Manager",
    description:
      "Create and manage digital content for our website and social media platforms, including photography, videography, and copywriting.",
    salary: "$55k–$65k/yr",
  },
];
const stats = [
  { label: "Founded", value: "1897" },
  { label: "Countries", value: "3" },
  { label: "Shops", value: "75" },
  { label: "Employees", value: "3,875" },
];
const features = [
  {
    name: "Quality Without Compromise",
    description:
      "Every batch we brew reflects our commitment to excellence—from bean to cup.",
    icon: FaAd,
  },
  {
    name: "Sustainability at Every Step",
    description:
      "We prioritize eco-friendly packaging, fair trade partnerships, and zero-waste practices wherever possible.",
    icon: FaAddressCard,
  },
  {
    name: "Community-First Culture",
    description:
      "Our café isn’t just a place to grab a drink—it’s a hub for connection. We host open mic nights, art pop-ups, and fundraisers that give back to our neighborhood.",
    icon: FaAdversal,
  },
  {
    name: "Inclusivity and Accessibility",
    description:
      "We welcome everyone, from seasoned coffee aficionados to first-timers. Our space is ADA-compliant, our team is trained in inclusive service, and we strive to create an environment where everyone feels seen.",
    icon: FaAngular,
  },
];
export default function AboutPage() {
  return (
    <div className="relative">
      <main>
        <section className="mx-auto w-11/12">
          <div className="relative">
            <div className="mx-auto py-12 md:py-32">
              <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                <h1 className="lg:col-span-2 max-w-2xl xl:col-auto">
                  Our menu extends beyond coffee
                </h1>
                <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
                  <p className="font-medium text-lg text-pretty md:text-xl/8">
                    At Brewbrook, we believe coffee is more than a beverage—it’s
                    a ritual, a connector, and a daily source of comfort.
                    Located in the heart of Taguig, Philippines, we opened our
                    doors with one mission in mind: to create a space where
                    people could slow down, connect, and savor something
                    exceptional.
                  </p>
                </div>
                <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_1280.jpg"
                  className="xl:row-span-2 xl:row-end-2 mt-10 md:mt-16 lg:mt-0 xl:mt-36 rounded-2xl w-full max-w-lg lg:max-w-none aspect-6/5 object-cover"
                  width={1280}
                  height={1024}
                />
              </div>
              <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                <p className="font-semibold text-base/7">Where It All Began</p>
                <h1 className="mt-2 font-semibold text-4xl text-pretty md:text-5xl tracking-tight">
                  Our Story
                </h1>
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none text-base/7">
                  <div>
                    <p>
                      Founded in 1897, Brewbrook was born out of a simple
                      idea—bring people together through great coffee and
                      intentional hospitality. What started as a small corner
                      café with a single espresso machine has grown into a
                      trusted gathering spot for locals, creatives, students,
                      and professionals alike.
                    </p>
                    <p className="mt-8">
                      Our founders, Marvin Sutton, Benjamin Frye, Sylvia Cooper,
                      Yasmin Chaney, and Harley Preston were inspired by the
                      third-wave coffee movement and wanted to combine artisanal
                      quality with an approachable, community-driven vibe. Every
                      element of our shop—from the beans we roast to the
                      playlists we curate—is designed to make you feel at home.
                    </p>
                  </div>
                  <div>
                    <p>
                      We proudly source ethically grown, specialty-grade beans
                      from farms around the world. Our roasting process
                      highlights the unique flavor profiles of each origin, and
                      our baristas are trained to treat every cup with
                      care—whether it’s a bold espresso, a velvety flat white,
                      or a cold brew on a summer day.
                    </p>
                    <p className="mt-8">
                      Our menu extends beyond coffee. We offer handcrafted teas,
                      seasonal beverages, and a rotating selection of locally
                      baked pastries and plant-based options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Timeline section */}
          <div className="py-12 md:py-20">
            <div>
              <div className="gap-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-5 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                <h2 className="col-span-2 font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
                  What We Stand For
                </h2>
                <dl className="gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 col-span-3">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <dt className="font-semibold text-base/7">
                        <div className="flex justify-center items-center bg-secondary mb-6 rounded-lg text-secondary-foreground size-10">
                          <feature.icon aria-hidden="true" className="size-6" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base/7">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="mx-auto w-11/12">
          <div className="py-24 md:py-32">
            <div className="items-start gap-x-8 gap-y-16 md:gap-y-24 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="lg:pr-4">
                <div className="relative bg-gray-900/75 shadow-2xl px-6 md:px-12 lg:px-8 xl:px-10 pt-64 pb-9 lg:pb-8 xl:pb-10 rounded-3xl lg:max-w-lg overflow-hidden">
                  <Image
                    alt=""
                    src="https://cdn.pixabay.com/photo/2014/12/11/02/56/coffee-563797_1280.jpg"
                    className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                    width={2669}
                    height={2000}
                  />
                  <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply" />
                  <div
                    aria-hidden="true"
                    className="top-1/2 left-1/2 absolute blur-3xl -ml-16 transform-gpu -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-40 w-274.25 aspect-1097/845"
                    />
                  </div>
                  <figure className="relative isolate">
                    <svg
                      fill="none"
                      viewBox="0 0 162 128"
                      aria-hidden="true"
                      className="-top-4 -left-2 -z-10 absolute h-32 stroke-white/20"
                    >
                      <path
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                      />
                      <use
                        x={86}
                        href="#0ef284b8-28c2-426e-9442-8655d393522e"
                      />
                    </svg>
                    <Image
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                      className="w-auto h-12"
                      width={200}
                      height={48}
                    />
                    <blockquote className="mt-6 font-semibold text-white text-xl/8">
                      <p>
                        “At Brewbrook, we don’t just serve coffee—we serve
                        people. For over a century, our goal has been the same:
                        to offer a space where quality, community, and
                        conscience come together. Every decision we make, from
                        how we source our beans to how we support our team and
                        partners, is rooted in respect and responsibility. This
                        isn't just a business. It’s a legacy—and we intend to
                        leave it better than we found it.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm/6 text-white">
                      <strong className="font-semibold text-white">
                        Marvin Sutton,
                      </strong>{" "}
                      CEO at Brewbrook
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <div className="lg:max-w-lg text-base/7">
                  <p className="font-semibold text-base/7">Company values</p>
                  <h1 className="mt-2 font-semibold text-4xl text-pretty md:text-5xl tracking-tight">
                    On a mission to empower remote teams
                  </h1>
                  <div className="max-w-xl">
                    <p className="mt-6">
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit. Faucibus
                      commodo massa rhoncus, volutpat. Dignissim sed eget risus
                      enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="mt-8">
                      Et vitae blandit facilisi magna lacus commodo. Vitae
                      sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in
                      vel. Mauris varius vulputate et ultrices hac adipiscing
                      egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                      integer orci.
                    </p>
                    <p className="mt-8">
                      Et vitae blandit facilisi magna lacus commodo. Vitae
                      sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in
                      vel. Mauris varius vulputate et ultrices hac adipiscing
                      egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                      integer orci.
                    </p>
                  </div>
                </div>
                <dl className="gap-8 grid grid-cols-2 md:grid-cols-4 mt-10 pt-10 border-gray-900/10 border-t">
                  {stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                      <dt className="font-semibold text-sm/6">{stat.label}</dt>
                      <dd className="mt-2 font-bold text-3xl/10 tracking-tight">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="mx-auto mt-12 md:mt-20 xl:mt-26">
            <div className="mx-auto lg:mx-0 max-w-2xl">
              <h2 className="font-semibold text-4xl text-pretty md:text-5xl tracking-tight">
                Our Charitable Impact
              </h2>
              <p className="mt-6 text-base/7">
                Since 2010, we’ve raised over $2.1 million for charitable causes
                through our annual “Brew for Change” initiatives and
                percentage-of-sales events.
              </p>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-end gap-8 mx-auto lg:mx-0 mt-16 lg:mt-20 max-w-2xl lg:max-w-none">
              <div className="flex md:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-none justify-between md:items-end lg:items-start gap-x-16 gap-y-8 bg-primary p-8 rounded-2xl md:w-3/4 lg:w-72 md:max-w-md lg:max-w-none text-primary-foreground">
                <p className="flex-none font-bold text-3xl tracking-tight">
                  $700k
                </p>
                <div className="lg:flex-none md:w-80 lg:w-auto md:shrink">
                  <p className="font-semibold text-lg tracking-tight">
                    Clean Water International
                  </p>
                  <p className="mt-2 text-base/7">
                    Funding water filtration systems and infrastructure for
                    rural communities across Latin America and Sub-Saharan
                    Africa.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between md:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-44 bg-secondary p-8 rounded-2xl lg:w-full lg:max-w-sm text-secondary-foreground">
                <p className="flex-none font-bold text-3xl tracking-tight">
                  $850k
                </p>
                <div className="lg:flex-none md:w-80 lg:w-auto md:shrink">
                  <p className="font-semibold text-lg tracking-tight">
                    Coffee Kids
                  </p>
                  <p className="mt-2 text-base/7">
                    Supporting youth training programs in coffee-growing
                    regions, empowering the next generation of ethical
                    producers.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between md:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-28 bg-tertiary p-8 rounded-2xl md:w-11/12 lg:w-full md:max-w-xl lg:max-w-none text-tertiary-foreground">
                <p className="flex-none font-bold text-3xl tracking-tight">
                  $550k
                </p>
                <div className="lg:flex-none md:w-80 lg:w-auto md:shrink">
                  <p className="font-semibold text-lg tracking-tight">
                    Feeding America
                  </p>
                  <p className="mt-2 text-base/7">
                    Helping fight hunger in the U.S. through direct donations,
                    food drives, and volunteer hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Job openings */}
          <div className="mx-auto mt-12 md:mt-20 xl:mt-26">
            <div className="gap-16 grid lg:grid-cols-7 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="lg:flex-auto lg:col-span-3 w-full lg:max-w-lg">
                <h2 className="font-semibold text-3xl text-pretty md:text-4xl tracking-tight">
                  Join Our Team
                </h2>
                <p className="mt-6 text-xl/8">
                  We’re always looking for passionate, community-minded
                  individuals to join our growing family. Whether you’re a
                  seasoned barista or new to the world of coffee, we provide a
                  workplace that is inclusive, growth-oriented, and creatively
                  fulfilling.
                </p>
                <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2015/06/24/01/15/coffee-819362_1280.jpg"
                  className="mt-16 rounded-2xl w-full lg:h-138 aspect-6/5 object-cover lg:aspect-auto"
                  width={1344}
                  height={1104}
                />
              </div>
              <div className="lg:flex-auto lg:col-span-4 w-full">
                <h3 className="sr-only">Job openings</h3>
                <ul className="gap-5 grid md:grid-cols-2 my-8 divide-y w-full">
                  {jobOpenings.map((opening) => (
                    <li key={opening.id} className="py-8">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Role</dt>
                        <dd className="flex-none w-full font-semibold text-lg tracking-tight">
                          {opening.role}
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="flex-none mt-2 w-full text-base/7">
                          {opening.description}
                        </dd>
                        <dt className="sr-only">Salary</dt>
                        <dd className="mt-4 font-semibold text-base/7">
                          {opening.salary}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
