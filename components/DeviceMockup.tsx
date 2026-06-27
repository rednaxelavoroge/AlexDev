import Image from "next/image";
import { Lock, Hammer } from "lucide-react";

type Device = "macbook" | "browser" | "iphone";
type Status = "live" | "nda" | "soon";

export interface DeviceLabels {
  ndaLabel: string;
  ndaDesc: string;
  soonLabel: string;
  soonDesc: string;
}

function Placeholder({ status, labels }: { status: Status; labels: DeviceLabels }) {
  const isNda = status === "nda";
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0b0f19] to-[#070b15] text-center px-6">
      <div
        className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${
          isNda
            ? "bg-red-500/10 border-red-500/30 text-red-400"
            : "bg-amber-500/10 border-amber-500/30 text-amber-400"
        }`}
      >
        {isNda ? <Lock size={24} /> : <Hammer size={24} />}
      </div>
      <p className="text-white font-semibold font-display">
        {isNda ? labels.ndaLabel : labels.soonLabel}
      </p>
      <p className="text-xs text-gray-500 max-w-[14rem]">
        {isNda ? labels.ndaDesc : labels.soonDesc}
      </p>
    </div>
  );
}

export function DeviceMockup({
  src,
  alt,
  device,
  status,
  url,
  labels,
}: {
  src: string | null;
  alt: string;
  device: Device;
  status: Status;
  url?: string;
  labels: DeviceLabels;
}) {
  const Shot = ({ rounded = "" }: { rounded?: string }) =>
    src ? (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 640px"
        className={`object-cover object-top ${rounded}`}
      />
    ) : (
      <Placeholder status={status} labels={labels} />
    );

  if (device === "iphone") {
    return (
      <div className="relative mx-auto w-[200px] aspect-[200/410]">
        <div className="absolute inset-0 rounded-[2.2rem] bg-[#0b0f19] border border-white/15 device-shadow p-2">
          <div className="relative h-full w-full rounded-[1.7rem] overflow-hidden bg-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-5 w-24 bg-[#0b0f19] rounded-b-xl" />
            <Shot rounded="rounded-[1.7rem]" />
          </div>
        </div>
      </div>
    );
  }

  // browser + macbook share a browser chrome; macbook adds a base
  return (
    <div className="relative w-full">
      <div className="rounded-xl overflow-hidden border border-white/10 device-shadow bg-[#0b0f19]">
        <div className="flex items-center gap-2 px-3 h-8 bg-[#0d1220] border-b border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <div className="ml-3 flex-1 h-4 rounded bg-white/5 max-w-[60%] flex items-center px-2">
            <span className="text-[9px] text-gray-500 font-mono truncate">
              {url ? url.replace("https://", "") : "preview"}
            </span>
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-[#070b15]">
          <Shot />
        </div>
      </div>
      {device === "macbook" && (
        <div className="relative mx-auto -mt-px">
          <div className="h-3 bg-gradient-to-b from-[#15192480] to-[#0b0f19] rounded-b-xl border-x border-b border-white/5" />
          <div className="mx-auto h-1.5 w-1/4 bg-[#0d1220] rounded-b-lg border-x border-b border-white/5" />
        </div>
      )}
    </div>
  );
}
