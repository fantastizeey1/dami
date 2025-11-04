const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto space-y-12 animate-pulse">
        {/* Navigation */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-lg bg-slate-300/80"></div>
            <div className="hidden md:flex space-x-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-16 rounded bg-slate-300/60"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block h-10 w-24 rounded-lg bg-slate-300/60"></div>
            <div className="h-10 w-10 rounded-lg bg-slate-300/80"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-4 w-32 rounded-full bg-slate-300/80"></div>
              <div className="h-12 sm:h-16 bg-slate-300/60 rounded-2xl w-3/4"></div>
              <div className="h-6 bg-slate-300/40 rounded-xl w-full"></div>
              <div className="h-6 bg-slate-300/40 rounded-xl w-5/6"></div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-12 w-32 rounded-xl bg-slate-300/70"></div>
              <div className="h-12 w-40 rounded-xl bg-slate-300/50"></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-slate-300/60 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-2xl bg-slate-300/40 rotate-12"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 py-16">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="group space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/60"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-300/60 group-hover:bg-slate-300/80 transition-colors"></div>
              <div className="space-y-3">
                <div className="h-5 bg-slate-300/70 rounded-lg w-2/3"></div>
                <div className="h-4 bg-slate-300/40 rounded-lg w-full"></div>
                <div className="h-4 bg-slate-300/40 rounded-lg w-5/6"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="text-center space-y-4 mb-12">
            <div className="h-6 bg-slate-300/60 rounded-lg w-48 mx-auto"></div>
            <div className="h-4 bg-slate-300/40 rounded-lg w-32 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/60 border border-slate-200/60"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-300/60"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-slate-300/70 rounded-lg w-1/2"></div>
                    <div className="h-3 bg-slate-300/40 rounded-lg w-1/3"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-300/50 rounded-lg w-full"></div>
                  <div className="h-4 bg-slate-300/50 rounded-lg w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-200/50 to-slate-300/30 p-12 text-center space-y-6">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="h-8 bg-slate-300/60 rounded-xl w-3/4 mx-auto"></div>
            <div className="h-5 bg-slate-300/40 rounded-lg w-5/6 mx-auto"></div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="h-12 w-36 rounded-xl bg-slate-300/70"></div>
            <div className="h-12 w-32 rounded-xl bg-white/60"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 border-t border-slate-200/60">
          <div className="grid md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-5 bg-slate-300/60 rounded-lg w-1/2"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className="h-4 bg-slate-300/40 rounded-lg w-3/4"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200/40 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="h-4 bg-slate-300/50 rounded-lg w-64"></div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-lg bg-slate-300/40"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
