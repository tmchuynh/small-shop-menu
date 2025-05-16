export default function ContactUsPage() {
  return (
    <div className="relative mx-auto w-11/12">
      <div className="mx-auto lg:mx-0 divide-y max-w-2xl lg:max-w-none">
        <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 py-16">
          <div>
            <h1>Contact Us</h1>
            <p>
              Whether you're inquiring about a position, placing a large order,
              or simply want to learn more about what we do—we’re here to help.
            </p>
          </div>
          <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h2>General Inquiries</h2>
              <p>For questions about our café, coffee, hours, or services.</p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:info@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      info@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 692-4816</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2>Careers & Employment</h2>
              <p>
                For job openings, internships, or employment-related questions.
              </p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:careers@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      careers@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 256-4825</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2>Catering Services</h2>
              <p>For events, bulk orders, or corporate coffee service.</p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:catering@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      catering@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 694-2150</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2>Orders & Shipping</h2>
              <p>
                For questions about online orders, subscriptions, or delivery
                tracking.
              </p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:orders@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      orders@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 360-5814</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2>Wholesale & Partnerships</h2>
              <p>For B2B inquiries, reseller accounts, and collaborations.</p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:partnerships@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      partnerships@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 695-2154</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2>Events & Media</h2>
              <p>For press inquiries, interviews, and public relations.</p>
              <dl className="space-y-1 mt-3 text-sm/6">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href="mailto:media@brewbrook.com"
                      className="font-semibold text-accent"
                    >
                      media@brewbrook.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>+1 (888) 395-4816</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
