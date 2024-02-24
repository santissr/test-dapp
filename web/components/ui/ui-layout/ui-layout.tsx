'use client';

import {WalletButton} from '../../solana/solana-provider';
import * as React from 'react';
import {ReactNode, Suspense, useEffect, useRef} from 'react';
import styles from './ui-layout.module.css'
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {AccountChecker} from '../../account/account-ui';
import {ClusterChecker, ClusterUiSelect, ExplorerLink,} from '../../cluster/cluster-ui';
import toast, {Toaster} from 'react-hot-toast';
import propiImage from '@/src/assets/propi-image2.png'
import Image from "next/image";

const pages: { label: string; path: string }[] = [
  {label: 'Perfil', path: '/account'},
  {label: 'Propiedades', path: '/page-properties'}, // Account
  {label: '¿Como funciona?', path: '/clusters'}, //cluster
  {label: 'Sobre nosotros', path: '/counter'}, // Counter
];

export function UiLayout({children}: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.d}>
      <div className={styles.navBarContainer}>
        <div style={{display: 'flex', gap: '100px'}}>
          <div className={styles.imageContainer}>
            <Link href="/">
              <Image
                className={styles.image}
                alt="Solana Logo"
                src={propiImage}
              />
            </Link>
          </div>
          <ul className={styles.uls}>
            {pages.map(({label, path}) => (
              <li className={styles.lis} key={path}>
                <Link
                  className={pathname.startsWith(path) ? 'active' : ''}
                  href={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.containerButtons}>
          <WalletButton/>
          <ClusterUiSelect/>
        </div>
      </div>
      <ClusterChecker>
        <AccountChecker/>
      </ClusterChecker>
      <div className={styles.d}>
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          {children}
        </Suspense>
        <Toaster position="bottom-right"/>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Generated by{' '}
            <a
              className="link hover:text-white"
              href="https://github.com/solana-developers/create-solana-dapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-solana-dapp
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export function AppModal({
                           children,
                           title,
                           hide,
                           show,
                           submit,
                           submitDisabled,
                           submitLabel,
                         }: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
                          children,
                          title,
                          subtitle,
                        }: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}