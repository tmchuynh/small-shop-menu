import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-semibold text-base/7 text-indigo-600">About us</p>
          <h1 className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            On a mission to empower remote teams
          </h1>
          <p className="mt-6 text-balance text-gray-700 text-xl/8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas.
          </p>
        </div>
        <section className="lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div className="lg:pr-8">
            <h2 className="font-semibold text-2xl text-gray-900 text-pretty tracking-tight">
              Our mission
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
          </div>
          <div className="lg:row-span-2 lg:-mr-16 xl:mr-auto pt-16">
            <div className="gap-4 lg:gap-4 xl:gap-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 -mx-8 sm:-mx-16 lg:mx-0">
              <div className="shadow-xl rounded-xl overflow-hidden aspect-square outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                  width={560}
                  height={560}
                />
              </div>
              <div className="shadow-xl -mt-8 lg:-mt-40 rounded-xl overflow-hidden aspect-square outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                  width={560}
                  height={560}
                />
              </div>
              <div className="shadow-xl rounded-xl overflow-hidden aspect-square outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                  width={560}
                  height={560}
                />
              </div>
              <div className="shadow-xl -mt-8 lg:-mt-40 rounded-xl overflow-hidden aspect-square outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                  width={560}
                  height={560}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 max-lg:mt-16">
            <p className="font-semibold text-base/7 text-gray-500">
              The numbers
            </p>
            <hr className="mt-6 border-gray-200 border-t" />
            <dl className="gap-x-8 gap-y-4 grid grid-cols-1 sm:grid-cols-2 mt-6">
              <div className="flex flex-col gap-y-2 pb-4 border-gray-200 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">Raised</dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 pb-4 border-gray-200 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">Companies</dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:pb-4 max-sm:border-gray-200 max-sm:border-b max-sm:border-dotted">
                <dt className="text-gray-600 text-sm/6">Deals Closed</dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-gray-600 text-sm/6">Leads Generated</dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      <div className="mt-32 sm:mt-40 overflow-hidden">
        <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
            <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
              <h2 className="font-semibold text-4xl text-gray-900 sm:text-5xl tracking-tight">
                Our people
              </h2>
              <p className="mt-6 text-gray-600 text-xl/8">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
                error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
            <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
              <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  className="bg-gray-50 rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                  width={1152}
                  height={842}
                />
              </div>
              <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
                <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="flex-none bg-gray-50 rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                    width={768}
                    height={604}
                  />
                </div>
                <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    className="flex-none bg-gray-50 rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                    width={1152}
                    height={842}
                  />
                </div>
                <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="bg-gray-50 rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                    width={768}
                    height={604}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
